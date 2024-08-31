import { useState, useEffect } from "react";
import * as trackService from "./services/trackService";
import TrackForm from "./components/trackForm";
import TracksList from "./components/tracksList";
import TracksDetails from "./components/trackDetails";

import "./App.css";
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tracksList, setTracksList] = useState([]);
  const [selected, setSelected] = useState(null);

  const create = async (formData) => {
    const newTrack = await trackService.create(formData);
    setTracksList([...tracksList, newTrack]);
  };

  const remove = async (trackId) => {
    const updatedTracks = await trackService.remove(trackId);
    setTracksList(updatedTracks);
  };

  const update = async (trackId, track) => {
    const updatedList = await trackService.update(trackId, track);
    setTracksList(updatedList);
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await trackService.index();
        setTracksList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setSelected(null);
          setShowForm(!showForm);
        }}
      >
        {showForm ? "Hide form" : "Show add track"}
      </button>

      <TracksList
        tracksList={tracksList}
        remove={remove}
        change={setSelected}
      />

      {showForm && (
        <TrackForm createTrack={create} trackId={selected} update={update} />
      )}
    </>
  );
};

export default App;
