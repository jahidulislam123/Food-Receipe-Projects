import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const FoodDetails = () => {
    const {foodDetailsId} =useParams();
    const [foodi ,setFoodi]=useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/food/${foodDetailsId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoodi(data))
    },[])
    return (
        <div>
           
           <div class="hero text-left mb-28 bg-amber-300">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={foodi.img} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">{foodi.name}</h1>
      <h1 class="text-2xl font-bold">Price : {foodi.price}</h1>
      <h1 class="text-3xl font-bold"> Quantity : {foodi.quantity}</h1>
      
      <p class="py-6">{foodi.description}</p>

      <button class="btn text-white font-bold w-full btn-secondary">Order Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default FoodDetails;