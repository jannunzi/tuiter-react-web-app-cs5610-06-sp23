import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbumTracks, getAlbum } from "./napster-service";
import { useSelector } from "react-redux";
import { userLikesAlbum } from "./likes-service";
function NapsterAlbumDetailsScreen() {
  const { currentUser } = useSelector((state) => state.users);
  const { id } = useParams();
  const [tracks, setTracks] = useState([]);
  const [album, setAlbum] = useState({});
  const likeAlbum = async () => {
    const response = await userLikesAlbum(currentUser._id, id);
    console.log(response);
  };
  const fetchAlbum = async () => {
    const response = await getAlbum(id);
    setAlbum(response);
  };
  const fetchTracks = async () => {
    const response = await getAlbumTracks(id);
    setTracks(response);
  };
  useEffect(() => {
    fetchTracks();
    fetchAlbum();
  }, []);
  return (
    <div>
      <h1>{album.name}</h1>
      <h2>{currentUser && currentUser.username}</h2>
      <h2>Artist: {album.artistName}</h2>
      <h2>Release Date: {album.released}</h2>
      {currentUser && (
        <>
          <button onClick={likeAlbum} className="btn btn-success">
            Like
          </button>
          <button className="btn btn-danger">Unlike</button>
        </>
      )}
      <br />
      <img
        src={`https://api.napster.com/imageserver/v2/albums/${id}/images/300x300.jpg`}
      />
      <h2>Tracks</h2>
      <ul className="list-group">
        {tracks.map((track) => (
          <li className="list-group-item">
            <audio className="float-end" controls src={track.previewURL}>
              <a href={track.previewURL}>Download audio</a>
            </audio>
            <h3>
              <Link to={`/napster/track/${track.id}`}>{track.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(album, null, 2)}</pre>
      <pre>{JSON.stringify(tracks, null, 2)}</pre>
    </div>
  );
}

export default NapsterAlbumDetailsScreen;
