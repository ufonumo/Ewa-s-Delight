import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <div className='hero contact_head text-center'>
                <div className="header">
                    <h1>CONTACT US</h1>
                </div>
            </div>

            <section className="about container">
                <div className="row">
                    <div className="col-lg-8 contact">
                        <h4>OUR ADDRESS</h4>
                        <p>Bells University of Technology, Ota, Ogun State</p>
                    </div>
                    <div className="col-lg-4 contact">
                        <h4>CLICK HERE TO</h4>
                        <a href="https://wa.me/message/AT4L2YQ3NHPBL1"> <button className='order_btn mb-5'>Send me a Message</button></a>
                    </div>
                    <div className="col-lg-6 contact">
                        <h4>OUR CONTACT</h4>
                        <a href="tel:+08085649253">08085649253</a>

                        <div className='mt-3'>
                            <a href="mailto:ewasdelight@gmail.com">ewasdelight@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}
