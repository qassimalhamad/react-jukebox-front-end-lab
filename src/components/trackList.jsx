import { Link } from "react-router-dom";

const TrackList = ({ trackList, handleDeleteTrack, handlePlayTrack }) => (
  <>
    <h1>Track List</h1>
    <Link to="/add-track">Add New Track</Link>
    <ul>
      {trackList.map((track) => (
        <li key={track._id}>
          <p>Title: {track.title}</p>
          <p>Artist: {track.artist}</p>
          <Link to={`/edit-track/${track._id}`}>Edit</Link>
          <button type="button" onClick={() => handleDeleteTrack(track._id)}>
            Delete
          </button>
          <button type="button" onClick={() => handlePlayTrack(track._id)}>
            Play
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default TrackList;
