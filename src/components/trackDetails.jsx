const TracksDetails = (props) => {
  const handleRemove = (trackId) => {
    props.remove(trackId);
  };

  const handleEdit = (track) => {
    props.change(track);
  };

  return (
    <>
      <p>
        {props.currentTrack.title} by: <b>{props.currentTrack.artist}</b>
      </p>
      <form>
        <button
          type="button"
          onClick={() => {
            props.setPlaying(props.currentTrack);
          }}
          name="play"
        >
          Play
        </button>
        <button
          type="button"
          name="edit"
          onClick={() => {
            handleEdit(props.currentTrack);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          name="delete"
          onClick={() => {
            handleRemove(props.currentTrack._id);
          }}
        >
          Delete
        </button>
      </form>
    </>
  );
};

export default TracksDetails;
