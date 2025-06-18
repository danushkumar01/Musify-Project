import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyGarage } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const UploadPhoto = () => {
  let { authuser } = useContext(MyGarage);
  let [photo, setPhoto] = useState("");

  let [photopreview, setPhotoPreview] = useState("");

  function handleChangeFile(e) {
    let file = e.target.files[0];
    setPhoto(file);
    console.log(file);

    let data = URL.createObjectURL(file);
    setPhotoPreview(data);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    let data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "music_musify");
    data.append("cloud_name", "delan2mjl");
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/delan2mjl/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    let result = await res.json();
    let imageUrl = result.url;

    await updateProfile(authuser, {
      photoURL: imageUrl,
    });
    toast.success("Profile Photo Updated Successfully");
  }
  return (
    <section className="h-[calc(100vh-70px)] flex justify-center items-center bg-slate-800 flex-col">
      <header>
        <h1 className="flex p-7 font-bold text-purple-300 text-3xl">
          Upload Photo
        </h1>
      </header>
      <main>
        <form
          className="w-[400px] h-auto flex flex-col bg-slate-900 pt-4 p-7 rounded-3xl "
          onSubmit={handleSubmit}
        >
          <div className="py-2">
            <label htmlFor="photo" className="tracking-wider text-amber-50">
              Upload Photo Here!!
            </label>
            {photopreview && (
              <img
                src={photopreview}
                alt="Preview"
                className="w-[180px] h-[180px] m-auto rounded-full p-2"
              />
            )}

            <input
              type="file"
              id="photo"
              multiple
              placeholder="Upload your Photo"
              onChange={handleChangeFile}
              className=" border text-amber-50 border-slate-200 w-full focus:outline-none rounded-md placeholder:text-amber-50 px-2 py-2 file:px-3 file:py-1 file:bg-slate-500 file:rounded-md"
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

export default UploadPhoto;
