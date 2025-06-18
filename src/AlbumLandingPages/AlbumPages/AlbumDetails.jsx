import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyGarage } from "../../Context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const AlbumDetails = () => {
  const {
    songs: sg,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(MyGarage);

  const location = useLocation();
  const albumData = location?.state;
  const songs = albumData?.songs || [];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSongClick = (index) => {
    setSongs(songs);
    setCurrentSongIndex(index);
    setIsPlaying(currentSongIndex === index ? !isPlaying : true);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="text-white w-full flex flex-col justify-center items-center pt-10 mb-[100px]">
      {/* Album Header */}
      <article className="w-[90%] h-[400px] flex bg-gray-900 rounded-xl overflow-hidden shadow-lg">
        <aside className="basis-[30%] h-full p-5">
          <img
            src={albumData?.Thumbnail}
            alt={albumData?.title}
            className="w-full h-full object-cover rounded-md"
          />
        </aside>
        <aside className="basis-[70%] p-5 space-y-2 overflow-y-auto">
          <h1 className="text-5xl font-bold tracking-wider">
            {albumData?.title}
          </h1>
          <p><span className="font-semibold text-gray-300">Description:</span> {albumData?.description}</p>
          <p><span className="font-semibold text-gray-300">Language:</span> {albumData?.lang}</p>
          <p><span className="font-semibold text-gray-300">Release Date:</span> {albumData?.daterelease}</p>
          <p><span className="font-semibold text-gray-300">Starcast:</span> {albumData?.starcast}</p>
          <p><span className="font-semibold text-gray-300">Director:</span> {albumData?.director}</p>
          <p><span className="font-semibold text-gray-300">Tracks:</span> {albumData?.albumSongsCount}</p>
        </aside>
      </article>

      {/* Song Cards */}
      <main className="w-[90%] mt-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Songs Collection</h2>

        {songs.length > 0 ? songs.map((song, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{ borderRadius: 12 }}
              className="bg-gray-800/70 border border-gray-700 rounded-xl p-4 cursor-pointer hover:shadow-xl transition-all"
              onClick={() => handleSongClick(index)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={song.songThumbnail}
                  alt={song.songTitle}
                  className="w-[100px] h-[60px] rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{song.songTitle}</h3>
                  <p className="text-sm text-gray-400">{song.songSingers}</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 text-white p-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSongClick(index);
                  }}
                >
                  <Play size={20} />
                </motion.button>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-sm text-gray-300 space-y-1"
                  >
                    <p><strong>Music Director:</strong> {song.songMusicDirectors}</p>
                    <p><strong>Duration:</strong> {song.duration}</p>
                    <p><strong>Size:</strong> {song.size}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        }) : (
          <p className="text-center text-gray-400">Songs not found.</p>
        )}
      </main>
    </section>
  );
};

export default AlbumDetails;
