import React , {useEffect} from 'react'
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
import AOS from 'aos';

export default function HeroSection() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        }, []);

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
                    <div className="col-lg-6 about_article" data-aos="fade-up" data-aos-delay="200">
                        <h5 className='ewa_color' data-aos="fade-up" data-aos-delay="100">About Us</h5>
                        <article>Looking for a healthy alternative to traditional fast food fare? 
                        Then you’ve come to the right place. At Ewa’s Delight, you can indulge your appetite and your palate while keeping your commitment to staying healthy. Our luscious smoothies are made with fresh fruits and all natural ingredients, exactly the way you’d make them. Our fresh-squeezed juices have that just-picked goodness you crave and our healthy lite foods are abundant with flavorful meats, veggies and other wholesome goodies to keep you going strong and smiling all day long</article>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                        <img src={smoothieOne} className='smoothie_img' alt="smoothieOne"/>
                    </div>
                </div>
            </section>

            <section className="product about">
                <h5 className="ewa_color" data-aos="fade-up" data-aos-delay="200">Our Products</h5>
                <div class="parent" >
                    <div class="div1" data-aos="fade-up" data-aos-delay="100"> <img src={smoothieThree} alt="smoothieFour"/> </div>
                    <div class="div2" data-aos="fade-up" data-aos-delay="200"> <img src={smoothieTwo} alt="smoothieFour"/> </div>
                    <div class="div3" data-aos="fade-up" data-aos-delay="300"> <img src={smoothieFive} alt="smoothieFour"/> </div>
                    <div class="div4" data-aos="fade-up" data-aos-delay="400">  <img src={smoothieSix} alt="smoothieFour"/></div>
                    <div class="div5" data-aos="fade-up" data-aos-delay="200">  <img src={smoothieSeven} alt="smoothieFour"/></div>
                    <div class="div6" data-aos="fade-up" data-aos-delay="300"> <img src={smoothieEight} alt="smoothieFour"/> </div>
                    <div class="div7" data-aos="fade-up" data-aos-delay="450"> <img src={smoothieFour} alt="smoothieFour"/> </div>
                </div>
            </section>

                {/* TESTIMONIAL */}
            <section className='about container'>
                <h5 className="ewa_color" data-aos="fade-up" data-aos-delay="200">What Our Customers are Saying</h5>
                <div className="row">
                    <div className="col-lg-4 testimonial" data-aos="fade-up" data-aos-delay="200">
                        <hr/>
                        <h5>Islamiyah Ayayi</h5>
                        <em>“The smoothie quality is noticeably more amazing than everything else i’ve ever tasted!”</em>
                    </div>

                    <div className="col-lg-4 testimonial" data-aos="fade-up" data-aos-delay="300">
                        <hr/>
                        <h5>Margret Adenle</h5>
                        <em>“I was instantly blown away by their texture and thickness of the smoothie. The natural sweetness of the fruit that were blended together.”</em>
                    </div>
                    
                    <div className="col-lg-4 testimonial" data-aos="fade-up" data-aos-delay="400">
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
