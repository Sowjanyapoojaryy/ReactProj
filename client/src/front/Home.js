import React from 'react';
import './style.css';
import Footer from '../front/Footer'
import img from './images/home-img.png'
import img1 from './images/s-1.png'
import img2 from './images/s-img-1.jpg'
import img3 from './images/s-img-2.jpg'
import img4 from './images/s-2.png'
import img5 from './images/s-img-3.jpg'
import img6 from './images/s-3.png'
import img7 from './images/s-img-4.jpg'
import img8 from './images/s-4.png'
import img9 from './images/s-img-5.jpg'
import img10 from './images/s-5.png'
import img11 from './images/s-img-6.jpg'
import img12 from './images/snack.png'

import a from './images/step-1.jpg'
import b from './images/step-2.jpg'
import c from './images/step-3.jpg'
import d from './images/step-4.jpg'

import g1 from "./images/g-1.jpg"
import g2 from "./images/g-2.jpg"
import g3 from "./images/g-3.jpg"
import g4 from "./images/g-4.jpg"
import g5 from "./images/g-5.jpg"
import g6 from "./images/g-6.jpg"
import g7 from "./images/g-7.jpg"
import g8 from "./images/g-8.jpg"
import g9 from "./images/g-9.jpg"

import menu1 from './images/p-1.jpg'
import menu2 from './images/p-2.jpg'
import menu3 from './images/p-3.jpg'
import menu4 from './images/p-4.jpg'
import menu5 from './images/p-5.jpg'
import menu6 from './images/p-6.jpg'

  
  function Home(){
    
        return (
          <div>
      <section className="home" id="home">
      
          <div className="content">
              <h3>Snacks made with love</h3>
              <p>BookMyFood is always thinking about your health. We don't just put together a box of snacks; we follow a meticulous list of check and balances to ensure that our snacks match high standards of quality and taste. Click below to find out what goes into putting together your BookMyFood box before it reaches you. Smarter snack oredr in cinema theater begins here.</p>
              <a href="/Menu" className="btn">order now</a>
          </div>
      
          <div className="image">
              <img src={img} alt=""/>
          </div>
      </section>
      
      <section className="speciality" id="speciality">
      
      <h1 className="heading"> our speciality</h1>
      
      <div className="box-container">
      
          <div className="box">
              <img className="image" src={img2} alt=""/>
              <div className="content">
                  <img src={img1} alt=""/>
                  <h3>tasty burger</h3>
                  <p>Tasty, delicious, and has me craving more on the first bite.” to “Juicy, mouthwatering, tasty, and everything you’d ever want to savor.</p>
              </div>
          </div>
          <div className="box">
              <img className="image" src={img3} alt=""/>
              <div className="content">
                  <img src={img4} alt=""/>
                  <h3>tasty pizza</h3>
                  <p>Pizza is a thing we share. More than other meals it brings a sense of togetherness.</p>
              </div>
          </div>
          <div className="box">
              <img className="image" src={img5} alt=""/>
              <div className="content">
                  <img src={img6} alt=""/>
                  <h3>cold ice-cream</h3>
                  <p>What most people love about ice cream is its taste. There are so many flavors to pick from, some that you’d never even imagined possible.</p>
              </div>
          </div>
          <div className="box">
              <img className="image" src={img7} alt=""/>
              <div className="content">
                  <img src={img8} alt=""/>
                  <h3>cold drinks</h3>
                  <p>there is one thing which is common in both a cold drink and a therapy, they both help you to keep it calm. #keeepcalm.</p>
              </div>
          </div>
          <div className="box">
              <img className="image" src={img9} alt=""/>
              <div className="content">
                  <img src={img10}alt=""/>
                  <h3>tasty sweets</h3>
                  <p>Don’t get confused, we all love sweets.No more talking, here is your sweet.he sweeter side you need to explore.</p>
              </div>
          </div>
          <div className="box">
              <img className="image" src={img11} alt=""/>
              <div className="content">
                  <img src={img12} alt=""/>
                  <h3>healty Snacks</h3>
                  <p>Simple Food Recipes For Everyone.Creative Snacks For Everyone.Simple Snacks to Get Well
Eat Healthy, Get Toned</p>
              </div>
          </div>
      
      </div>
      
      </section>
      <section class="popular" id="popular">
      
          <h1 class="heading"> most <span>popular</span> foods </h1>
      
          <div class="box-container">
      
              <div class="box">
                  <img src={menu1} alt=""/>
                  <h3>tasty burger</h3>
                  <a href="/Menu" class="btn">order now</a>
              </div>
              <div class="box">
                  <img src={menu2} alt=""/>
                  <h3>tasty popcorn</h3>
                  <a href="/Menu" class="btn">order now</a>
              </div>
              <div class="box">
                  <img src={menu3} alt=""/>
                  <h3>tasty sweets</h3>
                  <a href="/Menu" class="btn">order now</a>
              </div>
              <div class="box">
                  <img src={menu4} alt=""/>
                  <h3>tasty cupcakes</h3>
                  <a href="/Menu" class="btn">order now</a>
              </div>
              <div class="box">
                  <img src={menu5} alt=""/>
                  <h3>cold drinks</h3>
             <a href="/Menu" class="btn">order now</a>
              </div>
              <div class="box">
                  <img src={menu6} alt=""/>
                  <h3>cold ice-cream</h3>
                  <a href="/Menu" class="btn">order now</a>
              </div>
      
          </div>
      
      </section>
      <div class="step-container">
      
          <h1 class="heading">how it <span>works</span></h1>
      
          <section class="steps">
      
              <div class="box">
                  <img src={a} alt=""/>
                  <h3>choose your favorite food</h3>
              </div>
              
              <div class="box">
                  <img src={c} alt=""/>
                  <h3>pay money througn online</h3>
              </div>

              <div class="box">
                  <img src={b} alt=""/>
                  <h3>free and fast delivery</h3>
              </div>
              
              <div class="box">
                  <img src={d} alt=""/>
                  <h3>and finally, enjoy your food</h3>
              </div>
          
          </section>
      </div>
      
      <section class="gallery" id="gallery">
      
          <h1 class="heading"> our food <span> gallery </span> </h1>
      
          <div class="box-container">
      
              <div class="box">
                  <img src={g1} alt=""/>
                  <div class="content">
                      <h3>Burger</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g2} alt=""/>
                  <div class="content">
                      <h3>Popcorn</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g3} alt=""/>
                  <div class="content">
                      <h3>FrenchFries</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g4} alt=""/>
                  <div class="content">
                      <h3>Cup Cake</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g5} alt=""/>
                  <div class="content">
                      <h3>chips</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g6} alt=""/>
                  <div class="content">
                      <h3>Chocolate</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g7} alt=""/>
                  <div class="content">
                      <h3>icecream</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g8} alt=""/>
                  <div class="content">
                      <h3>cold Drinks</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
              <div class="box">
                  <img src={g9} alt=""/>
                  <div class="content">
                      <h3>Biscuits</h3>
                      <a href="/Menu" class="btn">order now</a>
                  </div>
              </div>
      
          </div>
      
      </section>
      <div>
           <Footer />
      </div>
      </div>

      )
}

export default Home