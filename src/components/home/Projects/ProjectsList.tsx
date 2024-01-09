import icons_dict from "lib/icons";
import postr from "public/images/postr.png";
import letmeinubc from "public/images/letmeinubc.png";
import echo from "public/images/echo.png";

const content = [
  {
    order: 2,
    title: "letmeinubc.com",
    src: "https://letmeinubc.com/",
    description: (
      <>
        I got tired of refreshing every hour to check if a course I wanted freed
        up. Created{" "}
        <a
          href="https://github.com/kel-z/UBC-Course-Scout"
          className="text-blue-400 underline hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          my own web scraper with a GUI
        </a>{" "}
        to check for openings -- later turned it into a website to send me an
        email when the course became available.
        <br />
        <br />
        Developed with AWS CDK. Free for everyone to use.
      </>
    ),
    image: letmeinubc,
    links: [
      {
        img: icons_dict["Github"],
        src: "https://github.com/kel-z/LetMeInUBC-2.0",
        text: "GitHub"
      },
      {
        // img: icons_dict["Github"],
        src: "https://letmeinubc.com/",
        text: "Check it out!"
      }
    ]
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
        {/* Received positive feedback from multiple users. */}
        <br />
        <br />
        Built with Rust, Next.js, and Typescript using the Tauri framework.
      </>
    ),
    image: postr,
    links: [
      {
        img: icons_dict["Github"],
        src: "https://github.com/zpv/postr",
        text: "GitHub"
      }
    ]
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
    image: echo,
    links: [
      {
        // img: icons_dict["Github"],
        src: "https://globalgamejam.org/2021/games/echo-6",
        text: "Submission"
      }
      // {
      //   img: icons_dict["Github"],
      //   src: "https://github.com/kel-z/Echo",
      //   text: "Github",
      // },
    ]
  }
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

export default content;
