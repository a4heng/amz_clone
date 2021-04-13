import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

        <div className="home__row">
          {/**Produc Component */}
          <Product 
          id="0"
          title="The Lean startup" 
          price="29.99" 
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={5}
          />
          <Product 
          id="1"
          title="T-fal Deep Fryer with Basket, Stainless Steel, Easy to Clean Deep Fryer, Oil Filtration, 2.6-Pound, Silver, Model FR8000"
          price="114.29"
          image="https://m.media-amazon.com/images/I/713j2j371bL._AC_UY436_FMwebp_QL65_.jpg"
          rating={5}
          />
          {/**Produc Component */}
        </div>

        <div className="home__row">
          {/**Produc Component */}
          <Product 
          id="2"
          title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (Latest Model, 4th Generation)"
          price="559.98"
          image="https://m.media-amazon.com/images/I/71FePRgkiZL._AC_UY436_FMwebp_QL65_.jpg"
          rating={4}
          />
          <Product 
            id="3"
            title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price="99.99"
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product 
            id="4"
            title="Cubiker Modern L-Shaped Desk Computer Corner Desk, PC Laptop Writing Study Desk for Home Office Wood & Metal, Rustic Brown"
            price="79.99"
            image="https://m.media-amazon.com/images/I/711a4xBzp+L._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="5" 
            title='Sceptre Curved 27" 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)'
            price="179.99"
            image='https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UL640_FMwebp_QL65_.jpg'
            rating={4}
          />
        </div>

      </div>
    </div>
  )
}

export default Home
