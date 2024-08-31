const TrackForm = (props) => {
  const track = props.trackId;
  const initialTrack = {
    artist: "",
    title: "",
  };

  const [formData, setFormData] = useState(track || initialTrack);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!track) {
      props.createTrack(formData);
      setFormData(initialTrack);
    } else {
      props.updateTrack(track._id, formData);
      setFormData(initialTrack);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    track ? setFormData(track) : setFormData(initialTrack);
  }, [track]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="artist">Artist</label>
      <input
        type="text"
        id="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />
      <button type="submit">{track ? "Update a track" : "Add a track"}</button>
    </form>
  );
};

export default TrackForm;
