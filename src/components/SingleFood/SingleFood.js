import React from 'react';
import { useNavigate } from 'react-router-dom';
const SingleFood = ({food}) => {

  const navigate = useNavigate();

  const navigateTofoodDetails=_id=>{
    navigate(`/foodDetails/${_id}`);
}
    const { _id, name , price , description,quantity , supliar ,img}=food;
    return (
        <div class="card  bg-base-100 shadow-xl">
  <figure><img className='w-auto rounded-lg h-64' src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge text-white badge-secondary">{price}</div>
    </h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Quantity</div> 
      <div class="badge badge-outline">{quantity}</div>
    </div>
    <button onClick={()=>navigateTofoodDetails(_id)} class="btn btn-secondary text-white font-bold w-full ">Details</button>
  </div>
</div>
    );
};

export default SingleFood;