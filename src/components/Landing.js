import React, { useEffect, useRef, useState } from "react";

function Landing() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollToLearnMoreElement = document.getElementById(
        "scroll-to-learn-more"
      );
      // const scrollTop =
      //   window.pageYOffset || document.documentElement.scrollTop;
      // const windowHeight =
      //   window.innerHeight || document.documentElement.clientHeight;
      // const maxScrollTop =
      //   document.body.offsetHeight - windowHeight - scrollTop;
      // scrollToLearnMoreElement.style.opacity =
      //   maxScrollTop / windowHeight >= 0.5 ? 1 : maxScrollTop / windowHeight;

      // opacity 1 when top of page
      // opacity 0 otherwise
      scrollToLearnMoreElement.style.opacity =
        window.pageYOffset === 0 ? 1 : 0;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToLearnMore = (
    <div className="absolute bottom-10 left-0 w-full"
    id="scroll-to-learn-more"
    >
      <div className="flex justify-center">
        <a href="#learn-more" className="text-5xl animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );


  return (
    <>
      {/* <div className="flex h-screen">
    </div> */}
      <div className="flex items-center h-screen justify-center animate-[fade-in_1s_ease-in-out]" 
      >
      {scrollToLearnMore}
        <div>
          <div className="text-center">
            <h1 className="text-6xl">Hi, I'm Kelvin.</h1>
            {/* <h2 class="text-xl">.</h2> */}
          </div>
          <div>
            <p className="pt-5">
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="mailto:zhao0kelvin@gmail.com"
              >
                zhao0kelvin@gmail.com
              </a>
              <br />
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="https://www.linkedin.com/in/kel-z/"
              >
                linkedin
              </a>
              <br />
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="https://github.com/kel-z"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
