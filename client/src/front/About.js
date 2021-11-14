import React from 'react'
import prash from "./images/1.jpg"
import sowj from "./images/2.jpg"
import poo from "./images/3.jpg"
import abimg from './images/about-img.jpg'
import Footer from '../front/Footer'
import './Our.css'

function About() {
    return (
        <div>
            <div class="all-page-title page-breadcrumb">
				<div>
					<h3 style={{"color":"black","fontSize":"100px","textAlign":"center"}}>About Us</h3>
				</div>
                </div>
			

        <div>
            <div class="about-section-box">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 text-center">
					<div class="inner-column">
						<h1>Welcome To <span>BookMyFood</span></h1>
						<h4>Our Service</h4>
						<p>Welcome to BookMyFood. We're dedicated to giving you the very best snacks, with a focus on  dependability, customer service and uniqueness.we are making People life smarter in theater.This is our Beginning.
                        We hope you enjoy our Foods as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
						<a class="btn btn-lg btn-circle btn-outline-new-white" href="/Menu">OrderNow</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-6">
					<img src={abimg} alt="" class="img-fluid"/>
				</div>
			</div>
		</div>
	</div>

           <section className="page-section bg-light" id="team">
            <div className="containeres">
                <div className="text-center">
                    <div className="our">
                    <h2 className="section-heading text-uppercase">Our Team</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="rounded-circle" style={{"maxBlockSize":"200px"}}     src={prash} alt="..." />
                            <h4>Prashanth</h4>
                            <p className="text-muted">student</p>
            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" style={{"maxBlockSize":"200px"}} src={sowj} alt="..." />
                            <h4 className="sowju">Sowjanya</h4>
                            <p className="text-muted">Student</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={poo} style={{"maxBlockSize":"200px"}} alt="..." />
                            <h4>Poornima</h4>
                            <p className="text-muted">Student</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </section>
 
        </div>
        <div>
            <Footer />
        </div>
        </div>
    )
}

export default About
