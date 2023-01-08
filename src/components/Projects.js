import ProjectItem from "./ProjectItem";
import postr from "../assets/postr.png";
import letmeinubc from "../assets/letmeinubc.png";
import icons_dict from "./Tags";

const Projects = () => {
  const content = [
    {
      order: 2,
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
            rel="noreferrer">
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
          text: "Letmeinubc.com",
        },
      ],
    },
    {
      order: 3,
      title: "Postr",
      src: "https://github.com/zpv/postr",
      description: (
        <>
          A Twitter-like desktop client for the decentralized{" "}
          <a
            href="https://nostr.com/"
            className="text-blue-400 underline hover:no-underline"
            target="_blank"
            rel="noreferrer">
            nostr protocol
          </a>{" "}
          because web clients were too slow
          {/* {" "}
          <span className="line-through">
            and Twitter was going up in flames
          </span> */}
          {". "}
          Faster than web clients and low on resource usage.
          {/* Received positive feedback from multiple users. */}
          <br />
          <br />
          Built with Rust, Next.js, and Typescript using the Tauri framework (Open-source soon!).
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
      order: 5,
      title: "Echo",
      src: "https://globalgamejam.org/2021/games/echo-6",
      description: (
        <>
          My friend wanted to participate in the{" "}
          <a
            href="https://globalgamejam.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:no-underline">
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
          // img: icons_dict["Github"],
          src: "https://globalgamejam.org/2021/games/echo-6",
          text: "Submission",
        },
        {
          img: icons_dict["Github"],
          src: "https://github.com/kel-z/Echo",
          text: "Github",
        },
      ],
    },
    // {
    //   order: 4,
    //   title: "UBC Chan Center",
    //   src: "https://www.roblox.com/games/3242627/",
    //   description: (
    //     <>
    //       Graduation ceremonies were cancelled due to COVID-19, so I had the{" "}
    //       <span className="line-through">great</span> idea to make a scale model of the{" "}
    //       <a
    //         href="https://chancentre.com/virtual-tour/"
    //         target="_blank"
    //         rel="noreferrer"
    //         className="text-blue-400 underline hover:no-underline">
    //         Chan Center
    //       </a>{" "}
    //       in Roblox (game engine) for my friends to attend.
    //       <br />
    //       <br />
    //       Perhaps the most unorthodox project I
    //       will ever work on.
    //       Complete with working elevators and an adjustable lighting system made
    //       from scratch.
    //     </>
    //   ),
    //   image:
    //     "https://tr.rbxcdn.com/d2b6e3f3cfa41be4c9de2533071def8c/768/432/Image/Png",
    //   links: [
    //     {
    //       src: "https://www.roblox.com/games/3242627/",
    //       text: "Roblox.com",
    //     },
    //   ],
    // },
  ];

  content.sort((a, b) => a.order - b.order);

  return (
    <div className="my-5">
      <h1 className="text-center text-3xl font-semibold">Passion Projects</h1>
      <div className="w-full max-w-full border-t border-b border-neutral-800 bg-neutral-900">
        <div className="grid justify-center gap-2 overflow-hidden shadow-inner pb-6 lg:pb-0 lg:flex lg:flex-row">
          {content.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
