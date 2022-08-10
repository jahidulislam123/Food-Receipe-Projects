import React, { useEffect, useState } from 'react';
import SingleDeleteItem from './SingleDeleteItem';

const DeleteItem = () => {

    const [delete1,setDelete]=useState([])
    useEffect(()=>{
        fetch('https://peaceful-mesa-26468.herokuapp.com/foods')
        .then(res=>res.json())
        .then(data=>setDelete(data))
    },[])
    return (
        <div>
            <div>
                
                <div className='grid my-5 my-24 gap-4  mx-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 '>
            {
                delete1.map(food=>
                    
                     <SingleDeleteItem
                key={food._id}
                delete1={food}
                ></SingleDeleteItem>
                 )
            }
            </div>
            </div>
            
        </div>
    );
};

export default DeleteItem;