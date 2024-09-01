import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TrackForm = ({
  handleCreateTrack,
  trackList = [],
  handleUpdateTrack,
}) => {
  const navigate = useNavigate();
  const { trackId } = useParams();
  const initialState = { title: "", artist: "" };
  const [formData, setFormData] = useState(
    trackId ? trackList.find((track) => track._id === trackId) : initialState
  );

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackId) {
      handleUpdateTrack(formData, trackId);
    } else {
      handleCreateTrack(formData);
    }
    setFormData(initialState);
    navigate("/");
  };

  return (
    <>
      <h2>{trackId ? "Edit track" : "Create a new track"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to="/">Back</Link>
    </>
  );
};

export default TrackForm;
