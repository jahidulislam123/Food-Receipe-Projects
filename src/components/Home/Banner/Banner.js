import React from 'react';
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import img3 from '../../../images/img3.jpg'
import img4 from '../../../images/img4.jpg'
import img5 from '../../../images/img5.jpg'
import img6 from '../../../images/img6.jpg'
// import img1 from '../../../images/img1.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel carousel-center rounded-box">
  <div class="carousel-item">
    <img src={img1} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img2} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img3} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img4} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img5} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img6} alt="Pizza" />
  </div> 
  <div class="carousel-item">
    <img src={img1} alt="Pizza" />
  </div>
</div>
        </div>
    );
};

export default Banner;