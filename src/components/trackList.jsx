const TracksList = (props) => {
  const [playing, setPlaying] = useState({});

  return (
    <>
      <h1>Track list</h1>

      {props.tracksList.map((track) => (
        <TracksDetails
          key={track._id}
          currentTrack={track}
          remove={props.remove}
          change={props.change}
          setPlaying={setPlaying}
        />
      ))}

      <NowPlaying playing={playing} />
    </>
  );
};

export default TracksList;
