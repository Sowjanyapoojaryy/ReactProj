const mongoose = require('mongoose')


const PaymentSchema = new mongoose.Schema({
    OrderID:{
        type: String,
        trim: true,
        required: true
    },
    Status:{
        type: String,
        trim: true,
        required: true
    },
    TxnDate:{
        type: String,
        required: true
    },
    amount:{
        type:String,
        required:true
    },
    customerId:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        required:true
    },
    theaterName:{
        type:String,
        required:true
    },
    seatNo:{
        type:String,
        required:true
    },
    showtime:{
        type:String,
        required:true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Payment", PaymentSchema)