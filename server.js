require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const fileUpload=require('express-fileupload')
const Payments=require("./models/paymentModel")
const nodemailer=require('nodemailer')
const sendgridTransport=require('nodemailer-sendgrid-transport')

const transporter=nodemailer.createTransport(sendgridTransport({
  auth:{
      api_key:""
  }
  }))



const https = require("https");
const qs = require("querystring");

const checksum_lib = require("./Paytm/checksum");
var PaytmConfig = {
	mid: "Ztanbx42738781439498",
	key: "HERn7FFw%QXSzw@v",
	website: "WEBSTAGING"
}


const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

app.use('/user',require('./routers/userRouter'))
app.use('/api',require('./routers/categoryRouter'))
app.use('/api',require('./routers/Upload'))
app.use('/api',require('./routers/productRouter'))
app.use('/api',require('./routers/ContactRouter'))
app.use('/api',require('./routers/CashRoute'))
app.use("/api/paytm", require("./routers/paytm"));





const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });


//connect mngodb
const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err) throw error
    console.log("connected to mongodb")

})



app.get('/',(req,res)=>{
    res.sendFile(_dirname + "/index.html")
})


var paymentDetails;



app.post("/paynow", [parseUrl, parseJson], (req, res) => {
    // Route for making payment
     paymentDetails = {
      amount: req.body.amount,
      customerId: req.body.name,
      customerEmail: req.body.email,
      customerPhone: req.body.phone,
      theaterName:req.body.theater,
      seatNo:req.body.seat,
      showtime:req.body.show
  }
  if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
      res.status(400).send('Payment failed')
  } else {
      var params = {};
      params['MID'] = PaytmConfig.mid;
      params['WEBSITE'] = PaytmConfig.website;
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail';
      params['ORDER_ID'] = 'TEST_'  + new Date().getTime();
      params['CUST_ID'] = paymentDetails.customerId;
      params['TXN_AMOUNT'] = paymentDetails.amount;
      params['CALLBACK_URL'] = 'http://localhost:3000/callback';
      params['EMAIL'] = paymentDetails.customerEmail;
      params['MOBILE_NO'] = paymentDetails.customerPhone;
  
      
      checksum_lib.genchecksum(params, PaytmConfig.key, function (err, checksum) {
          var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
          // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
  
          var form_fields = "";
          for (var x in params) {
              form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
          }
          form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
  
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
          res.end();
      });
  }
  });
  app.post("/callback", (req, res) => {
    // Route for verifiying payment
  
    var body = '';
  
    req.on('data', function (data) {
       body += data;
    });
  
     req.on('end', function () {
       var html = "";
       var post_data = qs.parse(body);
  
       // received params in callback
       console.log('Callback Response: ', post_data, "\n");
  
  
       // verify the checksum
       var checksumhash = post_data.CHECKSUMHASH;
       // delete post_data.CHECKSUMHASH;
       var result = checksum_lib.verifychecksum(post_data, PaytmConfig.key, checksumhash);
       console.log("Checksum Result => ", result, "\n");
  
  
       // Send Server-to-Server request to verify Order Status
       var params = {"MID": PaytmConfig.mid, "ORDERID": post_data.ORDERID};
  
       checksum_lib.genchecksum(params, PaytmConfig.key, function (err, checksum) {
  
         params.CHECKSUMHASH = checksum;
         post_data = 'JsonData='+JSON.stringify(params);
  
         var options = {
           hostname: 'securegw-stage.paytm.in', // for staging
           // hostname: 'securegw.paytm.in', // for production
           port: 443,
           path: '/merchant-status/getTxnStatus',
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Content-Length': post_data.length
           }
         };
  
  
         // Set up the request
         var response = "";
         var post_req = https.request(options, function(post_res) {
           post_res.on('data', function (chunk) {
             response += chunk;
           });
           console.log(paymentDetails);
  
           post_res.on('end', function(){
             console.log('S2S Response: ', response, "\n");

             var _result = JSON.parse(response);
             let payment = new Payments({
               OrderID:_result.ORDERID,
               Status:_result.STATUS,
               TxnDate:_result.TXNDATE,
               amount:paymentDetails.amount,
               customerId:paymentDetails.customerId,
               customerEmail:paymentDetails.customerEmail,
               customerPhone:paymentDetails.customerPhone,
               theaterName:paymentDetails.theaterName,
               seatNo:paymentDetails.seatNo,
               showtime:paymentDetails.showtime

             })
             payment.save()

             .then(newUser=>{
               transporter.sendMail({
                 to:paymentDetails.customerEmail,
                    from:"BookMyFood123@gmail.com",
                    subject:"Payment success",
                   html:"<h1>welcome to book my food.you have successfully placed an order<h1>"
              })
            })
            .catch(err=>{
                console.log(err)
            })
             

               if(_result.STATUS == 'TXN_SUCCESS') {
                   res.redirect("http://localhost:3000/Success")
               }else {
                res.redirect("http://localhost:3000/Failure")
               }
               
             });
         });


  
         // post the data
         post_req.write(post_data);
         post_req.end();
        });
       });
  });
  

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
