"use client";

import { useState } from "react";

const MALApp = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [animes, setAnimes] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || username.trim().length === 0) {
      setError("Please enter a username.");
      setAnimes(null);
      return;
    }
    setError(null);
    fetch("/api/anime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        status: (
          document.querySelector(
            'input[name="status"]:checked'
          ) as HTMLInputElement
        ).value
      })
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const titles = data.map((anime: any) => anime.title).join(", ");
          if (titles.length === 0) {
            setError("No results.");
            setAnimes(null);
            return;
          }
          setAnimes(titles);
        });
      } else {
        setAnimes(null);
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="flex h-screen flex-col items-center p-10">
      <div className="min flex h-screen w-full max-w-[1024px] flex-col items-center">
        <h1>MAL to CSV</h1>
        <p className="mb-5 text-center text-neutral-500">
          *Currently only retrieves titles*
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-screen-sm flex-col items-center"
        >
          <div className="flex w-full">
            <input
              type="text"
              name="usr"
              placeholder="MyAnimeList username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-bl-full rounded-tl-full border-b border-l border-t border-neutral-700 bg-neutral-900 px-2 placeholder-neutral-600 outline-none"
            />
            <button
              type="submit"
              className="rounded-br-full rounded-tr-full border border-neutral-700 bg-neutral-900 pl-1 pr-2 transition duration-100 hover:border-violet-600 hover:bg-violet-700 active:border-opacity-70 active:bg-opacity-70"
            >
              Submit
            </button>
          </div>

          <div className="mt-2 flex flex-col md:flex-row">
            {[
              "All",
              "Watching",
              "Completed",
              "On Hold",
              "Dropped",
              "Plan to Watch"
            ].map((status, index) => (
              <div key={index} className="flex flex-row items-center px-3">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value={status.toLowerCase().replaceAll(" ", "_")}
                    className="mr-1"
                    defaultChecked={index === 0}
                  />
                  {status}
                </label>
              </div>
            ))}
          </div>
        </form>

        {error && <p className="mt-1 text-red-500">{error}</p>}

        {animes && (
          <>
            <button
              className="mt-2 w-full rounded-tl-lg rounded-tr-lg border border-neutral-700 bg-neutral-900 px-2 py-1 transition duration-100 hover:border-violet-600 hover:bg-violet-700 active:border-opacity-70 active:bg-opacity-70"
              onClick={() => {
                navigator.clipboard.writeText(animes);
              }}
            >
              Copy
            </button>
            <textarea
              value={animes}
              readOnly
              className="h-full w-full resize-none rounded-bl-lg rounded-br-lg border-b border-l border-r border-neutral-700 bg-neutral-900 px-2 py-1 text-neutral-500 outline-none focus:text-white"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MALApp;
