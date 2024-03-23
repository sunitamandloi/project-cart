import React from 'react'


function Home( props) {
    console.warn("home",props)

    return (
        <div className='container'>
            <h1><i>Home Component</i></h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://image.made-in-china.com/202f0j00OcpkhnMyPHqw/Wholesale-Original-Smartphone-Phone-X-Xr-Xs-Max-Used-Mobile-Phone.jpg" alt="no" />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span> 
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}> Abb to cart</button>
                    <button className='romeve-cart-btn' onClick={()=>props.removeToCartHandler ()}> Remove to cart</button>

                </div>

            </div>
        </div>
    )
}
export default Home;