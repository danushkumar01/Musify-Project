import React, { useContext } from "react";
import AlbumContent from "./AlbumContent";
import AlbumSidebar from "./AlbumSidebar";
import { MyGarage } from "../Context/AuthContext";
import CustomAudioPlayer from "react-pro-audio-player";



const AlbumContainer = () => {
  let {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(MyGarage);
  return (
    <>
    <section className="w-full h-[calc(100vh-70px)] bg-slate-800 text-gray-400 flex overflow-auto">
      <AlbumSidebar />
      <AlbumContent />

    </section>
    <CustomAudioPlayer
    songs={songs}
    setSongs={setSongs}
    isPlaying={isPlaying}
    currentSongIndex={currentSongIndex}
    onPlayPauseChange={setIsPlaying}
    onSongChange={setCurrentSongIndex}
    songUrlKey="url"
    songNameKey="title"
    songThumbnailKey="thumbnail" 
    songSingerKey="singer"
  />
  </>
  );
};

export default AlbumContainer;
