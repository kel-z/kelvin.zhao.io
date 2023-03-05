import React, { useState } from "react";
import Image from "next/image";
import terminal from "../../public/icons/console-128.png";
import keyboard from "../../public/icons/keyboard-128.png";
import camera from "../../public/icons/slr-camera-128.png";
import terminalTab from "./tabs/SWEng";
import keyboardTab from "./tabs/Keyboard";
import photoTab from "./tabs/Photo";

let items = [terminal, camera, keyboard];

const nav_content = {
  [terminal.src]: terminalTab,
  [camera.src]: photoTab,
  [keyboard.src]: keyboardTab,
};

function About() {
  const [activeTab, setActiveTab] = useState(terminal.src);
  const itemsMap = items.map((item, index) => (
    <Image
      src={item}
      className={
        "navIcon pointer-events-auto mx-5 my-5 inline w-1/5 max-w-[40px] cursor-pointer transition duration-100 ease-in-out hover:scale-110 hover:opacity-100 active:scale-105 active:opacity-50 " +
        (item.src === activeTab ? "opacity-100" : "opacity-10")
      }
      onClick={() => setActiveTab(item.src)}
      alt="navigation icon"
      key={index}
    />
  ));

  return (
    <div className="mx-5 flex justify-center lg:mx-0" id="about">
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
