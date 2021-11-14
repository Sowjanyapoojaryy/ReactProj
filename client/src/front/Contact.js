import React,{useState} from 'react'
import axios from 'axios'
import Footer from '../front/Footer'

const initialState={
    name: '',
    email: '',
    messege:'',
    err:' ',
    success:' '

}

function Contact(){

    const [contact,setContact]=useState(initialState)

    const {name,email,messege,err,success}=contact

    const handleChangeInput=e=>{
        const {name,value}=e.target
        setContact({...contact,[name]:value,err:'',success:''})

    }
    const handleSubmit=async e =>{
        e.preventDefault()
        try{
            const res=await axios.post('/api/contact',{name,email,messege})
            setContact({...contact,err:'',success:res.data.msg})
			alert("messege sent successfully")
        }catch(err){
            err.response.data.msg &&
             setContact({...contact,err:err.response.data.msg,success:''})
			 alert("messege failed")
        }
    }

    return (
        <div>
			
            <div className="contact">
                <h1 style={{"color":"white","textAlign":"center"}}>Contact Us</h1>
            </div>

			<div className="tm-Contain-inner-2 tm-contact-section">
				<div className="rows">
					<div className="col-md-6">
						<form  className="tm-contact-form"  onSubmit={handleSubmit}>
					        <div className="form-group">
					          <input type="text" name="name" className="form-control" placeholder="Name" id="name"  value={name} onChange={handleChangeInput} required/>
					        </div>
					        
					        <div className="form-group">
					          <input type="email" name="email" className="form-control" placeholder="Email" id="email" value={email} onChange={handleChangeInput} required/>
					        </div>

							<div className="form-group">
					          <input type="text" name="messege" className="form-control" placeholder="messege" id="messege" value={messege} onChange={handleChangeInput} required/>
					        </div>
				
					        
					        <div className="form-group tm-d-flex">
					          <button type="submit" className="tm-btn tm-btn-success tm-btn-right">
					            Send
					          </button>
					        </div>
						</form>
					</div>
					<div className="col-md-6">
						<div className="tm-address-box">
							<h4 className="tm-info-title tm-text-success">Our Address</h4>
							<address>
								180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
							
							<a href="tel:8748834611" className="tm-contact-link">
								<i className="fas fa-phone tm-contact-icon"></i>+91 8748834611
							</a>

							<a href="mailto:info@company.co" className="tm-contact-link">
								<i className="fas fa-envelope tm-contact-icon"></i>BookMyFood123@company.co
							</a>
			
							<div className="tm-contact-social">
								<a href="https://fb.com/templatemo" className="tm-social-link"><i className="fab fa-facebook tm-social-icon"></i></a>
								<a href="https://twitter.com/" className="tm-social-link"><i className="fab fa-twitter tm-social-icon"></i></a>
								<a href="https://instagram.com/" className="tm-social-link"><i className="fab fa-instagram tm-social-icon"></i></a>
							</div>

							</address>
						</div>
					</div>
				</div>
                </div>
				<div>
					<Footer />
				</div>
                </div>
    )
}

export default Contact

