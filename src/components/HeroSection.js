import React from 'react'
import Button from './Button'
import smoothieOne from '../assets/pexels-polina-tankilevitch-4443440.jpg';
import smoothieTwo from '../assets/pexels-alleksana-4051769.jpg'
import smoothieThree from '../assets/pexels-alleksana-4051756.jpg'
import smoothieFour from '../assets/pexels-lisa-845552.jpg'
import smoothieFive from '../assets/pexels-eva-elijas-5734478.jpg'
import smoothieSix from '../assets/pexels-valeria-boltneva-1251210.jpg'
import smoothieSeven from '../assets/pexels-polina-tankilevitch-4443497.jpg'
import smoothieEight from '../assets/pexels-polina-tankilevitch-4443466.jpg'
import Footer from './Footer';

export default function HeroSection() {
    return (
        < >
            <div className='hero text-center'>
                <div className="header">
                    <h1>FRESH SMOOTHIES</h1>
                    <p>A cup of smoothie per day, keeps the doctor away</p>
                    <Button/>
                </div>
            </div>

            <section className="about container">
                <div className="row">
                    <div className="col-lg-6 about_article">
                        <h5 className='ewa_color'>About Us</h5>
                        <article>Looking for a healthy alternative to traditional fast food fare? 
                        Then you’ve come to the right place. At Ewa’s Delight, you can indulge your appetite and your palate while keeping your commitment to staying healthy. Our luscious smoothies are made with fresh fruits and all natural ingredients, exactly the way you’d make them. Our fresh-squeezed juices have that just-picked goodness you crave and our healthy lite foods are abundant with flavorful meats, veggies and other wholesome goodies to keep you going strong and smiling all day long</article>
                    </div>
                    <div className="col-lg-6">
                        <img src={smoothieOne} className='smoothie_img' alt="smoothieOne"/>
                    </div>
                </div>
            </section>

            <section className="product about">
                <h5 className="ewa_color">Our Products</h5>
                <div class="parent">
                    <div class="div1"> <img src={smoothieThree} alt="smoothieFour"/> </div>
                    <div class="div2"> <img src={smoothieTwo} alt="smoothieFour"/> </div>
                    <div class="div3"> <img src={smoothieFive} alt="smoothieFour"/> </div>
                    <div class="div4">  <img src={smoothieSix} alt="smoothieFour"/></div>
                    <div class="div5">  <img src={smoothieSeven} alt="smoothieFour"/></div>
                    <div class="div6"> <img src={smoothieEight} alt="smoothieFour"/> </div>
                    <div class="div7"> <img src={smoothieFour} alt="smoothieFour"/> </div>
                </div>
            </section>

                {/* TESTIMONIAL */}
            <section className='about container'>
                <h5 className="ewa_color">What Our Customers are Saying</h5>
                <div className="row">
                    <div className="col-lg-4 testimonial">
                        <hr/>
                        <h5>Islamiyah Ayayi</h5>
                        <em>“The smoothie quality is noticeably more amazing than everything else i’ve ever tasted!”</em>
                    </div>

                    <div className="col-lg-4 testimonial">
                        <hr/>
                        <h5>Margret Adenle</h5>
                        <em>“I was instantly blown away by their texture and thickness of the smoothie. The natural sweetness of the fruit that were blended together.”</em>
                    </div>
                    
                    <div className="col-lg-4 testimonial">
                        <hr/>
                        <h5>Ayomide Farooq</h5>
                        <em>“Utterly impressive—nothing more needs to be said about these smoothies that i’ve been buying for quite a while now.”</em>
                    </div>
                </div>
            </section>

            <Footer/>
            
        </>
    )
}
