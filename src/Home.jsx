import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
        <Product
          id="12321376"
          title="Herdio 4 Inch Outdoor Speakers Indoor Wall Mount Speakers"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/713wp2XrATL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="Eureka Home Lightweight Stick Vacuum Cleaner, Powerful Suction Corded Multi-Surfaces, 3-in-1"
          price={9.56}
          rating={4}
          image="https://m.media-amazon.com/images/I/517R7MrmXiL._AC_UL400_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4905950"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable ..."
          price={9.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        <Product
          id="90099332"
          title="Acer Aspire 5 A515-56-36UT, 15.6' Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB ..."
          price={450.98}
          rating={2}
          image="https://m.media-amazon.com/images/I/71233PTgAjL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321676"
          title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
          price={58.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/51cGlUCK5WL._AC_UL400_.jpg"
        />
        <Product
          id="45538094"
          title="Flygo Womens Fleece 2 Piece Outfits Sweatsuit Casual Half Zip Pullover Sweatshirt Joggers Tracksuit Set"
          price={13.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81x5S0+wH9L._AC_UL400_.jpg"
        />
        <Product
          id="44438094"
          title="Columbia Women's Benton Springs Full Zip0"
          price={23.46}
          rating={4}
          image="https://m.media-amazon.com/images/I/71F2tjW19JS._AC_UL400_.jpg"
        />
      </div>
      
    </div>
  </div>
  )
};

export default Home;