import axios from "axios";
const NAPSTER_API = "https://api.napster.com/v2.2";
const NAPSTER_KEY = process.env.REACT_APP_NAPSTER_KEY;

export const fullTextSearch = async (query) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?query=${query}&apikey=${NAPSTER_KEY}`
  );
  return response.data.search.data;
};

export const getAlbum = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${NAPSTER_KEY}`
  );
  return response.data.albums[0];
};

export const getTrack = async (trackId) => {
  const response = await axios.get(
    `${NAPSTER_API}/tracks/${trackId}?apikey=${NAPSTER_KEY}`
  );
  return response.data.tracks[0];
};

export const getAlbumTracks = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${NAPSTER_KEY}`
  );
  return response.data.tracks;
};
