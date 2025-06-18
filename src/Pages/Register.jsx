import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { _Auth } from '../backend/firebase';
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Register = () => {
  let navigate=useNavigate()
  let [data,setData]=useState(
    {
        username:"",
        useremail:"",
        userpassword:"",
        userconfirmpassword:""
    }
  )

  let {username,useremail,userpassword,userconfirmpassword}=data

  function handleChange(event){
    setData({...data,[event.target.name]:event.target.value})

  }

  async function handleSubmit(event){
    event.preventDefault()
    // setData({
    //     username:"",
    //     useremail:"",
    //     userpassword:"",
    //     userconfirmpassword:""
    // })
    try{
      if(userpassword===userconfirmpassword){
        let userData=await createUserWithEmailAndPassword(_Auth,useremail,userpassword)
        console.log(userData.user)
        sendEmailVerification(userData.user)
        console.log(userData.user)
        updateProfile(userData.user,{
          displayName:username,
          photoURL:"https://media-hosting.imagekit.io/43f5510bc8264946/1616766087816.jpg?Expires=1838130612&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=n8LjWL4RejsL3Rk8bOnqC~LLhNi37AJ8CyN9EMyudxg3n8jc~B4mqPIDWF5ekggLBvRXqCyEmCsODrfqP~RkYUGjFuL4iH3gNVdxJkOZns0ogEoTWN~y9zwW7h4jJnw7rBuQIxnJjY3fuo881dcapI1upt3o57Ck7W0-eTO2x8kW3ebvYFo0UHZWH52KCHWe8cPbmw3hCCm2bG2Ar3zxkbwICY2YeDIDcsS7n9rTmqb59qUhzf517mW7ZkK6vcWmhAWUcySTdJvZXmXZMxLxEhPfl1Wwzdz1Q8y~P9frZ6Q5hglNRiH4eTghYjYXqD1w3ZhNgW7cD~b5Hx31y5UDWw__"
        })
        navigate("/Login")
      }
      else{
        toast.error("Incorrect Password")
      }
    }
    catch(err){
        toast.error("Error "+err.code)
    }
  }
  
  console.log(data)
  let [eye, setEye] = useState(false);

  return (
    <section className="w-full h-[calc(100vh-70px)] bg-slate-700 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
      <header>
        <h1 className="text-4xl font-bold text-gray-400 pt-2 text-center mb-4">Register</h1>
      </header>
      <main>
        <form className="h-[420px] w-[400px] bg-slate-900 rounded-2xl p-7 flex flex-col pt-4 border border-blue-900">
          
          <div className="">
            <label htmlFor="name" className="text-gray-300 mb-1 block">Username</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter Your Name" 
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={username}
              name="username"
            />
          </div>

          <div className="py-1">
            <label htmlFor="email" className="text-gray-300 mb-1 block">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Your E-mail" 
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={useremail}
              name="useremail"
            />
          </div>

          <div className="py-1 relative">
            <label htmlFor="password" className="text-gray-300 mb-1 block">Password</label>
            <input 
              type={eye ? "text" : "password"} 
              id="password" 
              placeholder="Enter Password" 
              className="w-full p-2 pr-10 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={userpassword}
              name="userpassword"
            />
            <span 
              className="absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer text-gray-400 pt-8.5"
              onClick={() => setEye(!eye)}>
              {eye ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="py-1 relative">
            <label htmlFor="c-password" className="text-gray-300 mb-1 block">Confirm Password</label>
            <input 
              type={eye ? "text" : "password"} 
              id="c-password" 
              placeholder="Confirm Password" 
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={userconfirmpassword}
              name="userconfirmpassword"
            />
            <span 
              className="absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer text-gray-400 pt-8.5"
              onClick={() => setEye(!eye)}>
              {eye ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className='flex justify-between text-gray-400 '>
            <h1>Already Have An Account?</h1>
            <NavLink to={"/Login"} className='hover:text-blue-400 hover:underline'>Login</NavLink>
          </div>

          <div className="py-4">
            <button type="submit" className="bg-purple-500 hover:bg-purple-400 w-full cursor-pointer rounded-md text-white px-2 py-1 transition duration-300">
              Register
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}

export default Register;