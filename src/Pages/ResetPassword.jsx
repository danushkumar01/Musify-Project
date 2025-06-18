import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { _Auth } from "../backend/firebase";

const ResetPassword = () => {
  let [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(_Auth, email);
      toast.success(`Password Reset Email Sent to ${email} successfully`);
    } catch (err) {
      console.log(err);
      toast.error("Error " + err.code);
    }
  }
  return (
    <section className="h-[calc(100vh-70px)] flex justify-center items-center bg-slate-800 flex-col">
      <header>
        <h1 className="flex p-7 font-bold text-purple-300 text-3xl">
          Reset Password
        </h1>
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
          <div className="py-2">
            <button className="bg-purple-500 w-full rounded-md px-2 py-2">
              Login
            </button>
          </div>
          <div className="text-white text-center pt-2">
            <NavLink
              to={"/Login"}
              className="hover:text-blue-400 hover:underline"
            >
              Back to Login
            </NavLink>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ResetPassword;
