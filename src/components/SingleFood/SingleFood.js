import React from 'react';

const SingleFood = ({food}) => {
    const {  name , price , description,quantity , supliar ,img}=food;
    return (
        <div class="card  bg-base-100 shadow-xl">
  <figure><img className='w-auto rounded-lg h-64' src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge badge-primary">{price}</div>
    </h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Quantity</div> 
      <div class="badge badge-outline">{quantity}</div>
    </div>
    <button class="btn btn-secondary font-bold w-full ">Details</button>
  </div>
</div>
    );
};

export default SingleFood;