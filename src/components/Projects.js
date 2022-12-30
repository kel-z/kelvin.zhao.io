import ProjectItem from "./ProjectItem";
import postr from "../images/postr.png";
import letmeinubc from "../images/letmeinubc.png";
import icons_dict from "./Tags";

const Projects = () => {
  const content = [
    {
      title: "letmeinubc.com",
      src: "https://letmeinubc.com/",
      description: (
        <>
          I got tired of refreshing every hour to check if a course I wanted
          freed up. Developed{" "}
          <a
            href="https://github.com/kel-z/UBC-Course-Scout"
            className="text-blue-400 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            my own web scraper with a GUI
          </a>{" "}
          to check for openings -- later turned it into a website to send me an
          email when one was found.
          <br />
          <br />
          Deployed using AWS CDK. Free for everyone to use.
        </>
      ),
      image: letmeinubc,
      links: [
        {
          // img: icons_dict["Github"],
          src: "https://letmeinubc.com/",
          text: "letmeinubc.com",
        },
      ],
    },
    {
      title: "Postr",
      src: "https://github.com/zpv/postr",
      description: (
        <>
          A Telegram-like desktop client for the{" "}
          <a
            href="https://nostr.com/"
            className="text-blue-400 underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            nostr protocol
          </a>{" "}
          because web clients were too slow
          {/* {" "}
          <span className="line-through">
            and Twitter was going up in flames
          </span> */}
          {". "}
          Faster than web clients and low on resource usage.
          <br />
          <br />
          Built with Rust, Next.js, and Typescript.
        </>
      ),
      image: postr,
      links: [
        {
          img: icons_dict["Github"],
          src: "https://github.com/zpv/postr",
          text: "Github",
        },
      ],
    },
    {
      title: "Echo",
      src: "https://globalgamejam.org/2021/games/echo-6",
      description: (
        <>
          My friend wanted to participate in the{" "}
          <a
            href="https://globalgamejam.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:no-underline"
          >
            Global Game Jam
          </a>
          . I was nervous about not having any experience with game development,
          but I realized that it was a great opportunity to learn something new.
          <br />
          <br />
          The end-product exceeded my expectations. Check it out below!
        </>
      ),
      image:
        "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2021/01/339114/echo-splash-art_0.png?itok=3VuQwgQn&timestamp=1612137506",
      links: [
        {
          img: icons_dict["Github"],
          src: "https://github.com/kel-z/Echo",
          text: "Github",
        },
        {
          // img: icons_dict["Github"],
          src: "https://globalgamejam.org/2021/games/echo-6",
          text: "Submission",
        },
      ],
    },
  ];

  return (
    <div className="my-5">
      <h1 className="text-center text-3xl font-semibold">Passion Projects</h1>
      <div className="w-full max-w-full border-t border-b border-neutral-800 bg-neutral-900">
        <div className="grid justify-center gap-2 overflow-x-auto overflow-y-hidden shadow-inner lg:flex lg:flex-row">
          {content.map((project) => (
            <ProjectItem project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
