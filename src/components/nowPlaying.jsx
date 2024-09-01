const NowPlaying = ({ nowPlaying, isPlaying }) => (
  <>
    <h3>{isPlaying ? "Now playing" : "Nothing is being played"}</h3>
    <ul>
      {nowPlaying.map((track, index) => (
        <li key={index}>
          <p>Title: {track.title}</p>
          <p>Artist: {track.artist}</p>
        </li>
      ))}
    </ul>
  </>
);

export default NowPlaying;
