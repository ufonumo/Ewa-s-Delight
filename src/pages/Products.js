import React from 'react'
import Footer from '../components/Footer';
import Button from '../components/Button'

export default function Products() {
    return (
        <>
            <div className='hero contact_head text-center'>
                <div className="header">
                    <h1>Our Menu</h1>
                </div>
            </div>

            <div className="product about container">
                <div className="row product_list">
                    <div className=" product_items">
                        <div className="grid justify-content-between">
                            <h4>Bananarama</h4>
                        </div>
                        <hr/>
                        <p>The Bananarama smoothie contains Banana , milk, oats or coconut shavings and peanut butter.</p>
                        <p>Price: <em>₦ 300.00 – ₦ 400.00</em> </p>
                        <Button/>
                    </div>

                    <div className=" product_items">
                        <div className="grid ">
                            <h4>Creamy Melon</h4>
                        </div>
                        <hr/>
                        <p>The Creamy Melon smoothie contains watermelon, banana, pineapple, beetroot and ginger.</p>
                        <p>Price: <em>₦ 300.00 – ₦ 400.00</em> </p>
                        <Button/>
                    </div>
                    
                </div>
                <div className="row product_list  mt-2">
                    <div className=" product_items">
                        <div className="grid justify-content-between">
                            <h4>Melon Glow</h4>
                        </div>
                        <hr/>
                        <p>The Melon Glow smoothie contains a smooth mixture of watermelon, lemon and ginger.</p>
                        <p>Price: <em>₦ 300.00 – ₦ 400.00</em> </p>
                        <Button/>
                    </div>

                    <div className=" product_items">
                        <div className="grid justify-content-between">
                            <h4>Mango Treat</h4>
                        </div>
                        <hr/>
                        <p>This mouth-watering Mango Treat smoothie contains mango, lemon and ginger.</p>
                        <p>Price: <em>₦ 300.00 – ₦ 400.00</em> </p>
                        <Button/>
                    </div>
                </div>

                <div className="specials">
                    <h3 className='ewa_color pb-5'>Ewa’s delight Specials</h3>
                    <div className="row product_list">
                        <div className=" product_items">
                            <div className="grid justify-content-between">
                                <h4>Fruit Yoghurt parfait</h4>
                            </div>
                            <hr/>
                            <p>If you are looking for a quick breakfast idea in the morning or a pick me up snack during the day, this fruit yogurt parfait is seriously the <em>BEST!</em> .</p>
                            <p>Price: <em> ₦ 500.00</em> </p>
                            <Button/>
                        </div>

                        <div className=" product_items">
                            <div className="grid justify-content-between">
                                <h4>Yoghurt Parfait Sticks</h4>
                            </div>
                            <hr/>
                            <p>If you are looking for a quick breakfast idea in the morning or a pick me up snack during the day, this fruit yogurt parfait is seriously the <em>BEST!</em> .</p>
                            <p>Price: <em> ₦ 1000.00</em> </p>
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
