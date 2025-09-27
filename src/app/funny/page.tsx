const Funny = () => {
  return (
    <div className="flex cursor-[url(/cursors/ms-pointer.cur),pointer] flex-col bg-[url('/images/angelbeats.jpg')] font-serif lg:bg-[length:600px_300px] xl:bg-[length:800px_400px]">
      {/* Nav */}
      <div className="flex flex-wrap gap-4 bg-black bg-opacity-50 font-bold text-fuchsia-600">
        <p className="animate-blink">
          {"Best page on the Web !!! enjoy youre stay >:)"}
        </p>
        <a
          className="font-normal text-red-600 underline hover:no-underline"
          href="mailto:zhao0kelvin@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me! zhao0kelvin@gmail.com
        </a>
      </div>

      <p className="absolute right-0 hidden w-52 border border-black bg-[#ff0000] text-justify font-bold text-black first-letter:m-16 xl:block">
        I'm tired of being what you want me to be Feeling so faithless, lost
        under the surface Don't know what you're expecting of me Put under the
        pressure of walking in your shoes Every step that I take is another
        mistake to you (Caught in the undertow, just caught in the undertow)
        I've become so numb I can't feel you there Become so tired So much more
        aware I'm becoming this All I want to do Is be more like me And be less
        like you Can't you see that you're smothering me Holding too tightly,
        afraid to lose control? 'Cause everything that you thought I would be
        Has fallen apart right in front of you Every step that I take is another
        mistake to you (Caught in the undertow, just caught in the undertow) And
        every second I waste is more than I can take I've become so numb I can't
        feel you there Become so tired So much more aware I'm becoming this All
        I want to do Is be more like me And be less like you And I know I may
        end up failing too But I know You were just like me with someone
        disappointed in you I've become so numb I can't feel you there Become so
        tired So much more aware I'm becoming this All I want to do Is be more
        like me And be less like you I've become so numb I can't feel you there
        (I'm tired of being what you want me to be) I've become so numb I can't
        feel you there (I'm tired of being what you want me to be)
      </p>

      {/* Header */}
      <div className="xl:mx-52">
        {/* Random images */}
        <div>
          <img
            src="/images/penguin-dance.webp"
            alt="penguin"
            className="absolute"
          />
          <div className="absolute right-0 z-10 hidden sm:block">
            <div className="relative">
              <img src="/images/leon.gif" alt="leon" className="w-96" />
              <p className="absolute bottom-0 right-0 bg-black p-1 font-bold text-[#ff3df2] underline">
                By: Rhys
              </p>
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="flex justify-center">
          <a
            href="https://open.spotify.com/user/icyaneon"
            className="z-50 py-2 text-xl font-bold text-[rgb(29,255,29)] underline marquee"
          >
            CLICK HERE --- FOLLOW ME ON SPOTIFY FOR GOOD MUSIC
          </a>
        </div>

        {/* About */}
        <div className="flex w-full flex-col gap-10 border-4 border-[#000000]">
          {/* Crazy stacking effect */}
          <div className="relative flex">
            <p className="z-10 w-fit p-3 text-7xl font-bold italic text-cyan-600">
              Kelvin Zhao Homepage
            </p>
            <p className="absolute z-0 w-fit pl-1 pt-1 text-7xl font-bold italic text-pink-600">
              Kelvin Zhao Homepage
            </p>
            <p className="absolute z-30 w-fit p-2 text-7xl font-bold italic text-cyan-400">
              Kelvin Zhao Homepage
            </p>
          </div>

          <div className="flex flex-wrap bg-[url('/images/aot.webp')] bg-[length:500px_100px]">
            <span className="rainbow h-fit w-fit bg-[#ff0000] text-5xl font-bold">
              Check Out My Links!
            </span>
            <table className="border border-black bg-black">
              <tbody>
                <tr>
                  <td>
                    <a
                      className="bg-black text-teal-300 underline"
                      href="https://www.linkedin.com/in/kel-z/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="bg-black text-teal-300 underline"
                      href="https://github.com/kel-z"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      className="bg-black text-teal-300 underline"
                      href="/assets/Kelvin_Zhao_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      resume
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="relative h-96 w-4/5 border-4 border-yellow-100 bg-gradient-to-tr from-black to-[rgb(33,26,255)] text-[#ff0000]">
            <p className="absolute bottom-2 bg-[#31ff5a] text-3xl font-light italic text-yellow-300 underline">
              WATCH ANGEL BEATS!
            </p>
            <div className="max-h-full overflow-auto">
              <p className="mx-auto text-center text-7xl font-bold text-[#fff93f]">
                Welcome To My Website
              </p>

              <p className="w-2/3 border border-black p-5 text-justify font-bold">
                I Love To Play Roblox And Club Penguin With My Friends. You Can
                Add Yoshi1234 In Roblox, I Aceppt All Friend Request Even Know
                Thier A Noob. Games I Also Play Are Fantastic Contraption, Free
                Rider 2, Roller Coaster Creator, Line Rider And Woogie World. I
                Started To Play Neopets To But I Dont Rlly Like It.
              </p>

              <div className="flex">
                <div className="h-fit w-fit bg-gradient-to-r from-[#ffffff] via-[#00ff00] to-[#000000] p-2">
                  <img
                    src="/images/angel.webp"
                    alt="tesnsei"
                    className="h-80 w-[46rem]"
                  />
                </div>

                <div className="mx-auto w-full">
                  <iframe
                    className="h-96 w-full"
                    src="https://www.youtube.com/embed/ng40ORZq3M8?si=6F2Gvz9yyP35NwA2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-row gap-11 font-bold">
          <div className="w-1/3 border border-black bg-cyan-600">
            <p className="bg-purple-600 text-white">Interests</p>
            <p>Gamer</p>
            <p className="text-[#00ff00] underline">
              There Are ALOT Of Games That I Play, I Probably Play Club Penguin
              The Most.
            </p>
            <img
              src="/images/penguin-dance.webp"
              alt="penguin"
              className="border border-black"
            />
            <p>Music</p>
            <p className="text-[#00ff00] underline">
              My Favourite Songs Are Caramelldansen And Owl City Fireflies.
            </p>
            <p className="text-black">Caramelldansen:</p>
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/zvq9r6R6QAY?si=GijqbIU9wL7EUHSS&amp;start=2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-black">Owl City Fireflies</p>
            <iframe
              className="w-full"
              src="https://www.youtube.com/embed/psuRGfAaju4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="mr-5 w-full bg-gray-400 p-3">
            <p className="bg-[#0000ff] p-2 text-black">Blog</p>
            <p className="p-2 text-black">About me:</p>
            <div className="flex items-end">
              <img src="/images/shadow.gif" alt="shadow" />
              <p className="p-2 text-white">Credit To Rhys</p>
            </div>
            <p className="p-2 text-black">
              Sup. My blogger name is Yoshi1234. I play this game called Roblox.
              I like going on my computer because I can do so many things on it.
              I started playing Roblox in kindergarten and now I love games.
              Gaming takes up most of my time. I absolutely HATE homework.
              HAAAATE!!! Nothing worse than homework.
            </p>
            <div className="flex items-end">
              <img src="/images/annie.gif" alt="annie" />
              <p className="p-2 text-white">Credit To Annie</p>
            </div>
            <div className="mt-5">
              <p>
                This is Biscuit (Biscuito)! He's just a baby and will fight you
                if you try to take away his biscuit.
              </p>
              <img src="/images/biscuit.jpg" alt="biscuit" className="w-96" />
            </div>
            <div className="mt-5">
              <p>This is Ronnie Bonnie! He likes to chill.</p>
              <img
                src="/images/ronnie-bonnie.jpg"
                alt="ronnie"
                className="w-96"
              />
            </div>
            <div className="mt-5">
              <p>
                This is Oxy Boxy! He likes ice cream. He was rudely awaken from
                his nap shortly before this picture was taken.
              </p>
              <img
                src="/images/oxy-wake-up.jpg"
                alt="oxyboxy"
                className="w-96"
              />
            </div>
            <div className="mt-5">
              <p>
                Lobby Bobby wanted to try Bread's bread. This is how it turned
                out:
              </p>
              <img src="/images/lobby-bread.jpg" alt="lobby" className="w-96" />
            </div>
            <div className="mt-5">
              <p>Oxy Boxy smells something he doesn't like...</p>
              <img src="/images/oxy-mad.jpg" alt="lobby" className="w-96" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="animate-blink bg-red-500 p-2 text-xl font-bold text-white">
            UNDER CONSTRUCTION - More Awesome Stuff Coming Soon!
          </p>
          <p>
            You are visitor #<span className="rainbow">1337</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Funny;
