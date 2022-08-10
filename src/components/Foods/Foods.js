import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';

const Foods = () => {
    const [food,setFood]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <div>
            <div>
                <h2>The amount of Food {food.name}</h2>
                <div className='grid my-5 my-24 gap-4  mx-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 '>
            {
                food.map(food=>
                    
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