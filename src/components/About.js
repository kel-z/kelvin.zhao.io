import React, { useState } from "react";
import adobe from "../assets/adobe-ps-128.png";
import terminal from "../assets/console-128.png";
import headphones from "../assets/headphones-3-128.png";
import keyboard from "../assets/keyboard-128.png";
import camera from "../assets/slr-camera-128.png";
import photo_lights from "../assets/PC290731-min.jpg";
import photo_keyboard from "../assets/PC290021-min.jpg";
import icons_dict from "./Tags";

let items = [terminal, camera, keyboard];

const headphonesTab = <></>;

const adobeTab = <></>;

const keyboardTab = (
  <div className="inline sm:flex">
    <div className="text-left sm:w-2/3 md:float-left">
      <h5>Keyboards</h5>
      <p>
        Recently, I've been getting into mechanical keyboards after a friend of
        mine introduced me to the hobby. In fact, I'm typing this on my first
        custom-built keyboard — an 80% keyboard (Tiger 80 Lite) with Boba U4T
        switches and a custom keycap set.
        <br />
        <br />
        If you were to tell me a year ago that I'd be spending hours researching
        and putting slabs of foam into my keyboard, I might've brought you in
        for a health checkup. But I think this outcome was inevitable — many of
        my friends are keyboard geeks, and I've always been fascinated by the
        idea of building something from scratch.
      </p>
    </div>
    <div className="float-right my-auto hidden w-1/3 px-10 sm:inline">
      <img
        src={photo_keyboard}
        className="w-auto rounded-lg transition duration-500 ease-in-out hover:scale-110"
        alt="Tiger 80 lite keyboard"
      />
    </div>
    <div className="my-auto mt-5 sm:hidden">
      <img
        src={photo_keyboard}
        className="w-auto rounded-lg"
        alt="Tiger 80 lite keyboard"
      />
    </div>
  </div>
);

const skills = ["AWS CDK", "Next.js", "TypeScript", "Python", "Java", "C#"];
const skillsList = skills.map((skill, index) => (
  <div key={index}>
    <p className="mb-2 mr-1 mt-3 rounded-lg bg-neutral-800 p-2 py-2 leading-none sm:mx-0 sm:mt-0">
      <i className={icons_dict[skill]} />
      {" " + skill}
    </p>
  </div>
));

const terminalTab = (
  <div className="inline sm:flex">
    <div className="text-left text-lg sm:float-left sm:w-2/3">
      <h5>Software Engineering</h5>
      <p>
        First and foremost, I’m a developer at heart. My endless cycle of making
        and breaking code started when I picked up Lua at the age of 8, after
        trying so desperately to make an event-triggered door open in Roblox.
        <br />
        <br />
        Since then, I've been hooked. Back-end development is the perfect blend
        of creativity and problem-solving — two of my strongest traits. I thrive
        in this type of environment and find it incredibly addicting to keep
        learning and using my skills to make a positive difference.
        <br />
        <br />
        Unsurprisingly, I decided to make it my career. I am currently pursuing
        a Bachelor of Science degree at UBC with Computer Science as my major.
      </p>
    </div>
    <div className="flex flex-wrap sm:float-right sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

const photoTab = (
  <div className="inline sm:flex">
    <div className="text-left sm:w-2/3 md:float-left">
      <p>
        <h5>Photography</h5>
        It's hard to catch me without a camera when I'm travelling to new
        destinations with friends or family. Doing photography taps into my
        creative side and exercises my eye for detail, and it lets me express
        myself through the lens of a camera.
        <br />
        <br />
        I love the challenge of composing an image that tells a story and
        captures the motion of the world around me. I still have much to learn
        about post-processing, however.
        <br />
        <br />
        I'm currently rocking the Olympus EM-5 Mark III with a 12-40mm f/2.8 Pro
        lens. Its retro look and impressive image quality for such a compact
        size make it incredibly fun to use.
      </p>
    </div>
    <div className="float-right my-auto hidden w-1/3 px-10 sm:inline">
      <img
        src={photo_lights}
        className="w-auto rounded-lg transition duration-500 ease-in-out hover:scale-110"
        alt="Friend holding a bundle of lights"
      />
    </div>
    <div className="my-auto mt-5 sm:hidden">
      <img
        src={photo_lights}
        className="w-auto rounded-lg"
        alt="Friend holding a bundle of lights"
      />
    </div>
  </div>
);

const nav_content = {
  [adobe]: adobeTab,
  [headphones]: headphonesTab,
  [terminal]: terminalTab,
  [camera]: photoTab,
  [keyboard]: keyboardTab,
};

function About() {
  const [activeTab, setActiveTab] = useState(terminal);
  let itemsMap = items.map((item, index) => (
    <img
      src={item}
      className={
        "navIcon pointer-events-auto mx-5 my-5 inline w-1/5 max-w-[40px] cursor-pointer transition duration-100 ease-in-out hover:scale-110 hover:opacity-100 active:scale-105 active:opacity-50 " +
        (item === activeTab ? "opacity-100" : "opacity-10")
      }
      onClick={() => setActiveTab(item)}
      alt="navigation icon"
      key={index}
    />
  ));

  return (
    <div className="flex justify-center" id="about">
      <div className="w-full max-w-[1024px]">
        <div className="my-5 text-center">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <div className="w-full transform rounded-xl bg-gradient-to-r from-[#82008F] via-[#EA0C5F] to-[#F6BA00] p-[1px] transition-all">
            <div className="rounded-tl-xl rounded-tr-xl bg-neutral-800">
              <div className="nav items-center">{itemsMap}</div>
            </div>
            <div className="rounded-bl-xl rounded-br-xl bg-neutral-900">
              <div className="p-5 md:flex">{nav_content[activeTab]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
