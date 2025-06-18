import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { _Auth } from "../backend/firebase";

const Login = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
    email: "",
    password: "",
  });
  let { email, password } = data;
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let userData = await signInWithEmailAndPassword(_Auth, email, password);
      console.log(userData);
      if (userData.user.emailVerified === true) {
        toast.success("Login Success");
        navigate("/");
      } else {
        toast.error("Please verify your email");
      }
    } catch (err) {
      toast.error("Error " + err.code);
    }
  }
  console.log(data);
  let [eye, setEye] = useState(false);
  return (
    <section className="h-[calc(100vh-70px)] flex justify-center items-center bg-slate-800 flex-col">
      <header>
        <h1 className="flex p-7 font-bold text-purple-300 text-3xl">Login</h1>
      </header>
      <main>
        <form
          className="w-[400px] h-auto flex flex-col bg-slate-900 pt-4 p-7 rounded-3xl "
          onSubmit={handleSubmit}
        >
          <div className="py-2">
            <label htmlFor="email" className="tracking-wider text-amber-50">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleChange}
              className="  border text-amber-50 border-slate-200 w-full focus:outline-none rounded-md placeholder:text-amber-50 px-2 py-2"
              name="email"
            ></input>
          </div>

          <div className="relative w-full py-2">
            <label htmlFor="password" className="tracking-wider text-amber-50">
              Password
            </label>
            <input
              type={eye ? "text" : "password"}
              id="password"
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="border border-slate-200 w-full focus:outline-none rounded-md 
               placeholder:text-amber-50 px-2 py-2 pr-10 text-amber-50"
            />
            <span
              onClick={() => setEye(!eye)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            >
              {eye ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
            <div className="text-white flex justify-between pt-2">
            <h1>Forgot Password?</h1>
            <NavLink to={"/ResetPassword"} className="hover:text-blue-400 hover:underline">Reset password</NavLink>
          </div>
          </div>

          <div className="py-2">
            <button className="bg-purple-500 w-full rounded-md px-2 py-2">
              Login
            </button>
            <div className="text-white text-center pt-2">
              <h1>New to MusiFY?
              <NavLink
                to={"/Register"}
                className="text-blue-400 hover:underline"
              >
                Register Now
              </NavLink></h1>
            </div>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
