import React, { useContext, useEffect, useState } from "react";
import { MyGarage } from "../../Context/AuthContext";
import { LuUserRoundX } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { _DB } from "../../backend/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const MyAccount = () => {
  let { authuser } = useContext(MyGarage) || "";
  let { uid } = authuser || "";
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
  return (
    <section className="h-full w-full flex justify-center mt-15">
      <header className="relative w-[70%] h-[430px] bg-slate-900 flex flex-col rounded-md items-center">
        <img
          src={authuser?.photoURL}
          className="rounded-full h-[100px] w-[100px] absolute top-[20] transform -translate-y-1/2"
        />
        <div className="mt-15 text-center">
          <h4 className="text-xl font-bold text-gray-400">
            {authuser?.displayName}
          </h4>
          <h5 className="text-lg text-gray-400">{authuser?.email}</h5>
        </div>
        <div className="w-full h-[500px] bg-slate-900">
          {profile ? (
            <>
              <section className="w-full p-5">
                <div className="flex gap-10">
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">FullName:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.firstname}
                      </span>
                      <span className="font-bold text-xl">
                        {profile?.lastname}
                      </span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">DateOfBirth:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">{profile?.dob}</span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">Age:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">{profile?.age}</span>
                    </span>
                  </div>
                </div>
                <section className="w-full pt-15 flex gap-10">
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">Gender:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.gender}
                      </span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">Language:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.language}
                      </span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">Address:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.address}
                      </span>
                    </span>
                  </div>
                </section>
                <section className="w-full pt-15 flex gap-10">
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">Country:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.country}
                      </span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">State:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">
                        {profile?.state}
                      </span>
                    </span>
                  </div>
                  <div className="flex border w-[50%] px-3 rounded-md gap-2">
                    <span>
                      <h1 className="font-bold text-xl">City:</h1>
                    </span>
                    <span>
                      <span className="font-bold text-xl">{profile?.city}</span>
                    </span>
                  </div>
                </section>
              </section>
            </>
          ) : (
            <>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="text-2xl ">User Information Not Updated</h1>
                <LuUserRoundX className="text-[200px] text-red-600" />
                <NavLink to={"/ProfileContainer/AddProfile"}>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-800 transition duration-300 mt-3 mr-4">
                    Update Profile
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </header>
    </section>
  );
};

export default MyAccount;
