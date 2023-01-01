import { useEffect, useState } from "react";
import resume from "../assets/kelvinzhao_resume.pdf";

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const isEnvLoaded = client_id && client_secret && refresh_token;

const basic = isEnvLoaded ? window.btoa(`${client_id}:${client_secret}`) : "";

const Footer = () => {
  console.log(client_id);
  const [track, setTrack] = useState({});

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

  useEffect(() => {
    console.log(client_id);
    if (!isEnvLoaded) {
      setTrack({
        name: "Not Configured",
        artist: "Spotify",
        href: "https://open.spotify.com/user/icyaneon?si=ea25b8430cf24198",
      });
      return;
    }
    getAccessToken().then(({ access_token }) => {
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const res = {};
          if (data.is_playing) {
            res["name"] = data.item.name;
            res["artist"] = data.item.artists[0].name;
            res["href"] = data.item.external_urls.spotify;
          } else {
            res["name"] = "Nothing Playing";
            res["artist"] = "Spotify";
            res["href"] =
              "https://open.spotify.com/user/icyaneon?si=ea25b8430cf24198";
          }
          res["is_playing"] = data.is_playing;
          setTrack(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, []);

  return (
    <footer className="flex justify-center">
      <div className="flex w-full max-w-[1024px] justify-between border-t border-neutral-500 py-6">
        <div className="flex">
          <a
            href="https://open.spotify.com/user/icyaneon?si=ea25b8430cf24198"
            target="_blank"
            rel="noreferrer">
            <svg className="ml-10 lg:ml-0 mr-1 w-5" viewBox="0 0 167.5 167.5">
              <path
                fill="#1DB954"
                d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"></path>
            </svg>
          </a>
          <p className="text-neutral-500">
            {track.is_playing ? (
              <>
                <span className="italic">Listening to </span>
                <a
                  className="font-medium not-italic text-white hover:underline"
                  href={track.href}
                  target="_blank"
                  rel="noreferrer">
                  {track.name}
                </a>{" "}
                — {track.artist}
              </>
            ) : (
              <>
                <span className="italic">
                  {"Currently not listening to anything :("}
                </span>
              </>
            )}
          </p>
        </div>

        <div className="h-10 text-neutral-400 lg:mr-0 mr-10">
          <a
            href="#home"
            className="mr-4 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Home
          </a>
          <a
            href={resume}
            className="mr-4 hover:text-white"
            target="_blank"
            rel="noreferrer">
            Resume
          </a>
          <a
            href="#about"
            className="mr-4 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            About
          </a>
          <a
            href="#home"
            className="hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
