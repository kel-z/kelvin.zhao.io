import { Track } from "./types";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const isEnvLoaded = client_id && client_secret && refresh_token;
const basic = isEnvLoaded ? Buffer.from(`${client_id}:${client_secret}`).toString('base64') : "";

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTrack: () => Promise<Track> = async () => {
  if (!isEnvLoaded) {
    throw new Error("Spotify environment variables not loaded");
  }
  return getAccessToken().then(({ access_token }) => {
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const res: Track = {
          name: "",
          artist: "",
          href: "",
          is_playing: false,
        };
        if (data.is_playing) {
          res["name"] = data.item.name;
          res["artist"] = data.item.artists[0].name;
          res["href"] = data.item.external_urls.spotify;
        } else {
          res["name"] = "Nothing Playing";
          res["artist"] = "Spotify";
          res["href"] = "https://open.spotify.com/user/icyaneon";
        }
        res["is_playing"] = data.is_playing;
        return res;
      })
      .catch(() => {
        throw new Error("Spotify API error");
      });
  });
};
