import { useState } from "react";

import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";

const Home = ({ trackList, handleDeleteTrack }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayTrack = (trackId) => {
    const list = trackList.filter((track) => track._id === trackId);
    setNowPlaying(list);
    setIsPlaying(true);
  };

  return (
    <>
      <TrackList
        trackList={trackList}
        handleDeleteTrack={handleDeleteTrack}
        handlePlayTrack={handlePlayTrack}
      />
      <NowPlaying nowPlaying={nowPlaying} isPlaying={isPlaying} />
    </>
  );
};

export default Home;
