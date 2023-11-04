import { useEffect, useState } from "react";
import { Track, SetTracksState } from "lib/types";

const Footer = () => {
  const [track, setTrack]: [Track, SetTracksState] = useState({
    name: "Nothing",
    artist: "Spotify",
    href: "https://open.spotify.com/user/icyaneon",
    is_playing: false,
  });

  useEffect(() => {
    fetch("/api/get-playing").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setTrack(data);
        });
      }
    });
  }, []);

  return (
    <footer className="flex justify-center">
      <div className="flex w-full max-w-[1024px] flex-col border-t border-neutral-500 py-6 sm:flex-row sm:justify-between">
        <div className="mx-auto flex sm:ml-10">
          <a
            href="https://open.spotify.com/user/icyaneon"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="mr-1 w-5 lg:ml-0" viewBox="0 0 167.5 167.5">
              <path
                fill="#1DB954"
                d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"
              ></path>
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
                  rel="noreferrer"
                >
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

        <div className="mx-auto mt-3 h-10 text-neutral-400 sm:mr-10 sm:mt-0 lg:mr-0">
          <a
            href="#home"
            className="mr-4 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="/assets/kelvinzhao_resume2023.pdf"
            className="mr-4 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
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
            }}
          >
            About
          </a>
          <a
            href="#home"
            className="hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
