import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { _Auth, _DB } from "../backend/firebase";
import toast from "react-hot-toast";
import { doc, onSnapshot } from "firebase/firestore";
import { MyGarage } from "../Context/AuthContext";

export const Menu = () => {
  let { authuser, LogOut } = useContext(MyGarage);
  let uid = authuser?.uid;
  let [profile, setProfile] = useState();
  useEffect(() => {
    console.log(profile);

    function fetchData() {
      if (authuser?.uid) {
        let user_profile_collection = doc(_DB, "user_profile", authuser?.uid);
        onSnapshot(user_profile_collection, (userInfo) => {
          if (userInfo.exists()) {
            setProfile(userInfo.data());
          } else {
            console.log("userinfo not found");
            setProfile(null);
          }
        });
      } else {
        console.log("No user found");
      }
    }
    fetchData();
  }, [uid]);
  // console.log(authuser)

  function AnonymousUser() {
    return (
      <>
        <ul className="flex gap-5 text-[15px]">
          <li>
            <NavLink to={"/Login"}>
              <button className="px-4 py-2 rounded-md hover:bg-blue-500 cursor-pointer">
                Login
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Register"}>
              <button className="px-4 py-2 rounded-md hover:bg-blue-500 cursor-pointer">
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </>
    );
  }

  function AuthenticatedUser() {
    return (
      <>
        <ul className="flex text-[15px] cursor-pointer items-center">
          {profile?.role == "admin" && (
            <>
              <li className="flex gap-2">
                <NavLink
                  to="/AdminContainer"
                  className="flex items-center px-4 py-1 rounded-md gap-2 hover:bg-blue-500"
                >
                  <h1>Admin</h1>
                </NavLink>
              </li>
            </>
          )}
          <li className="flex gap-2">
            <NavLink
              to="/ProfileContainer"
              className="flex items-center px-4 py-1 rounded-md gap-2 hover:bg-blue-500"
            >
              <h1>{authuser.displayName}</h1>
              <img
                src={authuser.photoURL}
                className="rounded-full h-[30px] w-[30px]"
              />
            </NavLink>
          </li>
          <li>
            <button
              className="px-4 py-1 rounded-md hover:bg-blue-500 cursor-pointer"
              onClick={LogOut}
            >
              Log Out
            </button>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <ul className="flex gap-5 text-[15px]">
        <li>
          <NavLink to={"/"}>
            <button className="px-4 py-2 rounded-md hover:bg-blue-500 cursor-pointer">
              Home
            </button>
          </NavLink>
        </li>
        {authuser ? <AuthenticatedUser /> : <AnonymousUser />}
      </ul>
    </>
  );
};
