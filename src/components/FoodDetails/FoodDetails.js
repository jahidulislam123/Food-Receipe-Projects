import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const FoodDetails = () => {
    const {foodDetailsId} =useParams();
    const [foodi ,setFoodi]=useState({});
    const [isReload,setReload] = useState(false);
    useEffect(()=>{
        const url =`https://peaceful-mesa-26468.herokuapp.com/food/${foodDetailsId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoodi(data))
    },[])


    const deliverHandle1 =(e)=>{
        // console.log(e);
        const quantity =foodi?.quantity;
        // console.log(quantity);
        const updateDeliver ={quantity};
        const url2 =`https://peaceful-mesa-26468.herokuapp.com/food/${foodDetailsId}`;
        console.log(url2);
        fetch(url2,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',

            },
            body: JSON.stringify(updateDeliver),

        })
        .then(Response =>Response.json())
        .then(data=>{
            // setReload(!isReload)
            
            console.log(data);
            window.location.reload(false);
            toast("Updated Quantity")
           
            
            
        })
       
    }

    return (
        <div>
           
           <div class="hero text-left mb-28 bg-amber-300">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={foodi.img} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl pb-4 font-bold">{foodi.name}</h1>
      <h1 class="text-2xl font-bold">Price : {foodi.price}</h1>
      <h1 class="text-3xl font-bold"> Quantity : {foodi.quantity}</h1>
      
      <p class="py-6">{foodi.description}</p>

      <div>
        <button onClick={()=>deliverHandle1(foodi._id)} class="btn text-white font-bold w-full btn-secondary" type="submit"> Delivered</button> 
    </div> 
        
      
    </div>
  
</div>
</div>
</div>



            
        
    );
};

export default FoodDetails;