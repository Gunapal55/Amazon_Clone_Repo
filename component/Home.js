import React from 'react'
import '../component/Home.css';
import Header from './Header';
import Product from './Product';



function Home() {
    return (
        <div className='home'>
          <div className="home__container">
              <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon image" />
          <div className="home__row">

          <Product title="Play Station 5"
  price={24999.99}
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59cEmysjtT-_uRIYo30P891gNXX1ehvEBsQ&usqp=CAU"
   rating={5}
/>
<Product
title="A promised land"
price={699.99}
image="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/A_Promised_Land_%28Barack_Obama%29.png/220px-A_Promised_Land_%28Barack_Obama%29.png"
 rating={4}/>


</div>
<div className="home__row">

<Product
title="Apple AirPods Max"
price={32999.99}
image="https://www.bhphotovideo.com/images/images2500x2500/apple_mgyh3am_a_airpods_max_space_gray_1610233.jpg"
 rating={3}/>

<Product
title="Mi Band 5"
price={2499.99}
image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
 rating={4}/>
<Product
title="Apple M1 MacBook Pro"
price={122499.99}
image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011?wid=892&hei=820&&qlt=80&.v=1603406899000"
 rating={5}/>




</div>
<div className="home__row">

<Product
title="Cyberpunk 2077"
price={2999.99}
image="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
 rating={3}/>


<Product
title="Created By GP for fun!!"
price={55555555}
image="https://media-exp1.licdn.com/dms/image/C5103AQFEchnyuSklGw/profile-displayphoto-shrink_400_400/0/1554127929711?e=1614211200&v=beta&t=g6QuNrMfhbKa-_oVPtlSzgsMd7tlZFYe6hJOjJ9O_JU"
 rating={5}/>

</div>
<div className="home__row">
{/* Product */}
</div>



          </div>
        </div>
    )
}

export default Home;
