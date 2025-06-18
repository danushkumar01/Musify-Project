import React, { createContext, useState } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { _Auth } from "../Backend/Firebase";
export let MyGarage = createContext();
const AuthContex = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  let [authuser, setAuthUser] = useState(null);

  async function LogOut() {
    await signOut(_Auth);
    setAuthUser(null);
    window.location.assign("/Login");
    toast.success("Logged Out Successfully");
  }

  onAuthStateChanged(_Auth, (userInfo) => {
    if (userInfo.emailVerified == true) {
      setAuthUser(userInfo);
    } else {
      setAuthUser(null);
    }
  });
  return (
    <MyGarage.Provider
      value={{
        authuser,
        LogOut,
        songs,
        setSongs,
        isPlaying,
        setIsPlaying,
        currentSongIndex,
        setCurrentSongIndex,
      }}
    >
      {children}
    </MyGarage.Provider>
  );
};

export default AuthContex;
