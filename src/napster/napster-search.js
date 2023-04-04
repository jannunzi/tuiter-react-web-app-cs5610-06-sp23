import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fullTextSearch } from "./napster-service";
function NapsterSearchScreen() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchTerm);
  const [results, setResults] = useState({});
  const searchNapster = async () => {
    const response = await fullTextSearch(search);
    setResults(response);
    navigate(`/napster/search/${search}`);
  };
  useEffect(() => {
    if (searchTerm) {
      searchNapster();
    }
  }, [searchTerm]);
  return (
    <div>
      <h1>Napster Search</h1>
      <button onClick={searchNapster} className="float-end btn btn-primary">
        Search
      </button>
      <input
        className="form-control w-75"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Albums</h2>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {results.albums &&
                results.albums.map((album) => (
                  <td key={album.id}>
                    <Link to={`/napster/album/${album.id}`}>
                      <img
                        src={`https://api.napster.com/imageserver/v2/albums/${album.id}/images/200x200.jpg`}
                      />
                      <h3>{album.name}</h3>
                    </Link>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Tracks</h2>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {results.tracks &&
                results.tracks.map((track) => (
                  <td>
                    <h3>{track.name}</h3>
                    {track.id}
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Artists</h2>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {results.artists &&
                results.artists.map((artist) => (
                  <td>
                    <h3>{artist.name}</h3>
                    {artist.id}
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>

      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default NapsterSearchScreen;
