import React, { useEffect } from "react";

function Landing() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToLearnMoreElement = document.getElementById(
        "scroll-to-learn-more"
      );
      if (!scrollToLearnMoreElement) return;
      scrollToLearnMoreElement.style.opacity = window.scrollY === 0 ? "1" : "0";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToLearnMore = (
    <div className="absolute bottom-10 left-0 w-full" id="scroll-to-learn-more">
      <div className="flex justify-center">
        <a
          href="#about"
          className="animate-bounce text-5xl"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector("#about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
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
      <div
        className="flex h-screen animate-[fade-in_1s_ease-in-out] items-center justify-center"
        id="home"
      >
        {scrollToLearnMore}
        <div>
          <div className="text-center">
            <h1 className="text-6xl">Hi, I'm Kelvin.</h1>
            <p className="text-lg italic leading-none">
              BSc Computer Science @ UBC
            </p>
          </div>
          <div>
            <p className="mt-6">
              {/* {">"} computer science @ ubc
              <br /> */}
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="mailto:zhao0kelvin@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                zhao0kelvin@gmail.com
              </a>
              <br />
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="https://www.linkedin.com/in/kel-z/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <br />
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="https://github.com/kel-z"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <br />
              {">"}{" "}
              <a
                className="underline hover:no-underline"
                href="/assets/kelvinzhao_resume2023.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
