import React from 'react';
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const navigate =useNavigate();
    const onSubmit = data =>{
        

        console.log(data);
        const url =`https://peaceful-mesa-26468.herokuapp.com/foods`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            toast('successfully added a item notice it home page at bottom');
            navigate("/home")

        })

    };
    return (

        <div className='flex justify-center items-center mb-8 mt-10'>
            <div class="card  w-96 bg-base-100 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='Description' {...register("description")} />
      <input className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
      <input className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='Quantity' type="text" {...register("quantity")} />
      <input className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='Supplier' type="text" {...register("supliar")} />
      <input className='input mb-4 input-bordered input-primary w-full max-w-xs' placeholder='photoUrl' type="text" {...register("img")} />
      <input className='btn mb-4  text-white btn-secondary' value="Add Food" type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AddItem;