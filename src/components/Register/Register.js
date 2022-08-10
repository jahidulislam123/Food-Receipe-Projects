import React from 'react';
import auth from '../../firebase.init';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
      let errorMessage ;
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    if(loading||gLoading){
      //  return <button class="btn loading">loading</button>
    }

    if(error || gError){
      errorMessage = <p>{error?.message || gError?.message}</p>
    }

    if(user||gUser){
        console.log(gUser);
    }
    
    const navigate =useNavigate();
    if(user|| gUser){
        navigate("/home")
    }

    const onSubmit = data => {
      console.log(data)
      createUserWithEmailAndPassword(data.email , data.password)
  };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">SignUp</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Your Name" 
  class="input input-bordered w-full max-w-xs"
  {...register("name", {
    required :{
        value :true,
        message : 'Name is Required'
    },
    
  })}
  />
  <label class="label">
  {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
    
    
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
    
  </label>
  <input 
  type="email" 
  placeholder="Your Email" 
  class="input input-bordered w-full max-w-xs"
  {...register("email", {
    required :{
        value :true,
        message : 'Email is Required'
    },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    
    
  </label>
</div>



    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
    
  </label>
  <input 
  type="password" 
  placeholder="Your Password" 
  class="input input-bordered w-full max-w-xs"
  {...register("password", {
    required :{
        value :true,
        message : 'Password is Required'
    },
    minLength: {
      value: 6,
      message: 'must be 6 charcter or longer' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    
    
  </label>
   </div>

      {/* {errorMessage} */}
      <input className='btn w-full max-w-xs  text-white btn-primary' type="submit" value="SignUp" />
    </form>
     <p>Alreadt have an account?<Link className='text-primary font-bold' to="/login">Please Login</Link> </p>
    <div class="divider">OR</div>
    <button 
    onClick={() => signInWithGoogle()} 
    class="btn btn-outline btn-primary"
    >Continue With Google</button>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;