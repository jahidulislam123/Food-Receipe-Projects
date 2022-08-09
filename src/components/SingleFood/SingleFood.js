import React from 'react';

const SingleFood = ({food}) => {
    const {  name , price , description,quantity , supliar ,img}=food;
    return (
        <div class="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge badge-primary">{price}taka</div>
    </h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{supliar}</div> 
      <div class="badge badge-outline">{quantity}</div>
    </div>
  </div>
</div>
    );
};

export default SingleFood;