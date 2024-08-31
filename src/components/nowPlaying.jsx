const NowPlaying = (props) => {
  return (
    <>
      <p>Artist: {props.playing.artist}</p>
      <p>Title: {props.playing.title}</p>
    </>
  );
};

export default NowPlaying;
