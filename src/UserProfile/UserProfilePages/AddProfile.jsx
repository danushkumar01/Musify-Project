import React, { useContext, useState } from "react";
import { MyGarage } from "../../Context/AuthContext";
import { _DB } from "../../Backend/Firebase";
import { doc, setDoc } from "firebase/firestore";

const AddProfile = () => {
  let { authuser } = useContext(MyGarage);

  if (!authuser) {
    return <p className="text-red-500">User not authenticated</p>;
  }

  let { uid, email, photoURL, displayName } = authuser;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    age: "",
    gender: "",
    address: "",
    language: "",
    country: "",
    state: "",
    city: "",
    role:"user",
  });

  let {
    firstname,
    lastname,
    dob,
    age,
    gender,
    address,
    language,
    country,
    state,
    city,
    role,

  } = data;
  

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!uid) {
      console.error("Error: UID is undefined");
      return;
    }

    try {
      let userProfileRef = doc(_DB, "user_profile", uid);
      await setDoc(userProfileRef, {
        email,
        photoURL,
        displayName,
        uid,
        role,
        ...data,
      });
      console.log("Profile successfully updated!");
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
  }

  return (
    <section className="w-[83vw] h-[600px] bg-slate-800 flex justify-center items-center flex-col p-6 overflow-auto">
      <header>
        <h1 className="text-4xl font-bold text-pink-600 pt-2 text-center mb-4">
          Update Profile
        </h1>
      </header>
      <div className="w-[800px] bg-slate-900 rounded-lg p-7 overflow-hidden">
        <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="text-gray-300 mb-1 block">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter Your First Name"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.firstname}
              name="firstname"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="text-gray-300 mb-1 block">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Your Last Name"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.lastname}
              name="lastname"
            />
          </div>

          <div>
            <label htmlFor="dob" className="text-gray-300 mb-1 block">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.dob}
              name="dob"
            />
          </div>

          <div>
            <label htmlFor="age" className="text-gray-300 mb-1 block">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter Your Age"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.age}
              name="age"
            />
          </div>

          <div>
            <label htmlFor="gender" className="text-gray-300 mb-1 block">
              Gender
            </label>
            <div className="flex gap-2">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={data.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={data.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={data.gender === "Others"}
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="lang" className="text-gray-300 mb-1 block">
              Language
            </label>
            <input
              type="text"
              id="lang"
              placeholder="Enter Your Language"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.language}
              name="language"
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="address" className="text-gray-300 mb-1 block">
              Address
            </label>
            <textarea
              id="address"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.address}
              name="address"
            />
          </div>

          <div>
            <label htmlFor="country" className="text-gray-300 mb-1 block">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter Your Country"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.country}
              name="country"
            />
          </div>
          <div>
            <label htmlFor="state" className="text-gray-300 mb-1 block">
              State
            </label>
            <input
              type="text"
              id="state"
              placeholder="Enter Your State"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.state}
              name="state"
            />
          </div>

          <div>
            <label htmlFor="city" className="text-gray-300 mb-1 block">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter Your City"
              className="w-full p-2 rounded-lg border border-gray-500 bg-slate-700 text-white outline-none focus:border-blue-500"
              onChange={handleChange}
              value={data.city}
              name="city"
            />
          </div>

          <button
            type="submit"
            className="col-span-3 mt-5 bg-purple-600 hover:bg-purple-500 w-full cursor-pointer rounded-md text-white px-4 py-2 transition duration-300"
          >
            Add Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProfile;
