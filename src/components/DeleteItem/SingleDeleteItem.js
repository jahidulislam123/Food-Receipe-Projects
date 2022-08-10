import React, { useState } from 'react';

const SingleDeleteItem = ({delete1}) => {
    const [myItems,setMyItem]=useState([]);
    const handleDelete =id=>{
        const procced=window.confirm('Are you sure you want to delete ?');
        if(procced){
            const url =`http://localhost:5000/food/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining =myItems.filter(delete1 =>delete1._id!==id);
                setMyItem(remaining);
                window.location.reload(false);
            })
        }

    }

    const {  name , price , description,quantity , supliar ,img}=delete1;
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
    <button onClick={()=>handleDelete(delete1._id)} class="btn btn-secondary text-white font-bold w-full ">delete</button>
  </div>
</div>
    );
};

export default SingleDeleteItem;