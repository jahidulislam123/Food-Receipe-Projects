import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';

const Foods = () => {
    const [food,setFood]=useState([]);

    const [filter ,setFilter ]=useState('');
    const searchText =(event)=>{
        setFilter(event.target.value)
    }
    console.warn(filter);


    let dataSearch =food.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))

    })


    useEffect(()=>{
        fetch('https://peaceful-mesa-26468.herokuapp.com/foods')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <div>
            <div>
            <div class="form-control d-flex justify-center items-center">
                <label className='font-bold mb-2 text-3xl' htmlFor="">Search</label>
             <input 
             type="text"
              placeholder="Search Food" 
              class="input input-bordered font-bold bg-orange-100 input-secondary w-full max-w-xs"
              value={filter}
              onChange={searchText.bind(this)}
              />
              <p className='text-disabled'>Only search by Biryani,Sandwich,Chicken,Egg </p>
            </div>
            
                <div className='grid my-3 gap-4  mx-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 '>
            {
                dataSearch.map(food=>
                    
                     <SingleFood
                key={food._id}
                food={food}
                ></SingleFood>
                 )
            }
            </div>
            </div>
            
        </div>
    );
};

export default Foods;