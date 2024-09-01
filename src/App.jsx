import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import * as trackService from "./services/trackService";
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";

import "./App.css";

const App = () => {
  const [trackList, setTrackList] = useState([]);

  const handleCreateTrack = async (formData) => {
    const createdTrack = await trackService.createTrack(formData);
    setTrackList((prevTrackList) => [...prevTrackList, createdTrack]);
  };

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.updateTrack(formData, trackId);
      setTrackList((prevTrackList) =>
        prevTrackList.map((track) =>
          track._id === updatedTrack._id ? updatedTrack : track
        )
      );
    } catch (error) {
      console.error("Failed to update track:", error);
    }
  };

  const handleDeleteTrack = async (trackId) => {
    try {
      await trackService.deleteTrack(trackId);
      setTrackList((prevTrackList) =>
        prevTrackList.filter((track) => track._id !== trackId)
      );
    } catch (error) {
      console.error("Failed to delete track:", error);
    }
  };

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const data = await trackService.index();
        setTrackList(data);
      } catch (error) {
        console.error("Failed to fetch track list:", error);
      }
    };
    fetchIndex();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home trackList={trackList} handleDeleteTrack={handleDeleteTrack} />
        }
      />
      <Route
        path="/add-track"
        element={<TrackForm handleCreateTrack={handleCreateTrack} />}
      />
      <Route
        path="/edit-track/:trackId"
        element={
          <TrackForm
            trackList={trackList}
            handleUpdateTrack={handleUpdateTrack}
          />
        }
      />
    </Routes>
  );
};

export default App;
