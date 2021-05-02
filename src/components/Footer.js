import React from 'react';
import logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <div className='footer about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 text-center">
                        <img src={logo} alt="logo"/>
                        <h6 className='pt-3'>Ewa's Delight</h6>
                    </div>
                    <div className="col-lg-3 footer_about">
                        <p>At Ewa’s Delight, you can indulge your appetite and your palate while keeping your commitment to staying healthy. Our luscious smoothies are made with fresh fruits and all natural ingredients, exactly the way you’d make them.</p>
                    </div>
                    <div className="col-lg-3 footer_timetable">
                        <h5>Preorder starts from</h5>
                        <ul>
                            <li>Monday ________ 9:00 am – 4: 00 pm</li>
                            <li>Tuesday________9:00 am – 4: 00 pm</li>
                            <li>Wednesday ____ 9:00 am – 4: 00 pm</li>
                            <li>Thursday_______ 9:00 am – 4: 00 pm</li>
                        </ul>

                    </div>

                    <div className="col-lg-3 footer_timetable">
                        <h5>Delivery starts from</h5>
                        <ul>
                            <li>Friday_________12: 00 pm – 5: 00 pm</li>
                            <li>Saturday________12: 00 pm – 5: 00 pm</li>
                            <li>Wednesday _____9:00 am – 4: 00 pm</li>
                            <li>Sunday_________12: 00 pm – 5: 00 pm</li>
                            <em>Note** Payment validates order</em>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
