import React from 'react'
import './FAQs.css';
import Footer from '../front/Footer'

function FAQs() {
    return (
        <div>

<div class="fcontainer">
    <h1 style={{fontSize:"50px",textAlign:"center",paddingTop:"200px"}}>FAQs<p>Some information about our Website</p></h1>
    </div>

    <div className="Pick">
    <div class="frow">
        <div class="col-md-3 right">
            <nav id="side-navigation" class="stick-to-content pt-4" data-local-scroll>
                <h5 class="mb-3" style={{fontSize:"30px"}}>Pick a content:</h5>
                <hr></hr>
                <ul class="nav nav-vertical">
                    <li class="nav-item">
                        <a href="#faq1" className="nav-link"  style={{"color":"orange"}}>General</a>
                       
                    </li><br></br>
                    <hr></hr>
                    <li class="nav-item">
                        <a href="#faq2" className="nav-link" style={{"color":"orange"}}>Delivery</a>
                    </li><br></br>
                    <hr></hr>
                    <li class="nav-item">
                        <a href="#faq3" className="nav-link" style={{"color":"orange"}}>Payments</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-md-4 left">
            <div id="faq1">
            <h3 className="font"><i class="ti ti-file mr-4 text-primary"></i>General info</h3>
                <hr></hr>
                <div id="faq1_1" class="pb-5">
                    <h4>How does it work?</h4>
                    <p style={{"color":"orange"}}>Mainly this website belongs to snacks Ordering purpose.In the cinema Theater the people can buy the snacks of their choice.</p>
                </div>
                <div id="faq1_2" class="pb-5">
                    <h4>How long does it take?</h4>
                    <p style={{"color":"orange"}}>It takes not much time.customer can buy the snacks just by register or login to the website and they can buy their choice.</p>
                </div>
            </div>
            <div id="faq2">
            <h3 className="font"><i class="ti ti-package mr-4 text-primary"></i>Delivery</h3>
                <hr></hr>
                <div id="faq2_1" class="pb-5">
                    <h4>How does it work?</h4>
                    <p style={{"color":"orange"}}>The single admin views all the orders of particular customer and by obtaining the adress of the customer he will deliver the food by the workers.</p>
                </div>
                <div id="faq2_2" class="pb-5">
                    <h4>How long does it take?</h4>
                    <p style={{"color":"orange"}}>we will deliver the snacks to the  customer at the time of interval.we will deliver the snacks to particular customer by identifying their seat No</p>
                </div>
            </div>
            <div id="faq3">
                <h3 className="font"><i class="ti ti-wallet mr-4 text-primary"></i>Payments</h3>
                <hr></hr>
                <div id="faq3_1" class="pb-5">
                    <h4>How does it work?</h4>
                    <p style={{"color":"orange"}}>Payment process is simple.customer can pay the money through online by using paytm.and also the customer can give the money at the time of snacks arrival.</p>
                </div>
                <div id="faq3_2" class="pb-5">
                    <h4>How long does it take?</h4>
                    <p style={{"color":"orange"}}>The payment process does'nt take much more time.Customer can select online payment or cash on delivery purchase.it is an easy process.</p>
                </div>
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

export default FAQs
