import '../styles/About.css';
import React, { useEffect, useState } from 'react';

import adobe from '../images/adobe-ps-128.png';
import terminal from '../images/console-128.png';
import headphones from '../images/headphones-3-128.png';
import keyboard from '../images/keyboard-128.png';
import camera from '../images/slr-camera-128.png';
import code from '../images/code-2-256.png';
import photo_1 from '../images/PC290731.png';

let items = [adobe, headphones, terminal, camera, keyboard];
console.log(items)

const headphonesTab = (
    <></>
)

const adobeTab = (
    <></>
)

const keyboardTab = (
    <></>
)

const terminalTab = (
    <>
        <div className="text-left text-lg w-2/3 float-left">
            <h1>Software Engineer</h1>
            <p>
                First and foremost, I’m a developer from the heart. My endless cycle of making and breaking code started when I picked up my first programming language (Lua) at the age of 8.
                <br/>
                <br/>
                For me, back-end development is the perfect blend of creativity and problem-solving. I thrive in this type of environment and find it incredibly rewarding to learn and use my skills to make a positive difference.
                <br/>
                <br/>
                Unsurprisingly, I decided to make it my career. I am currently pursuing a Major in Computer Science at UBC.
            </p>
        </div>
        <div className="float-right w-1/3 my-auto">
            <img src={code} className="max-w-[100px] p-5 active w-auto mx-auto"/>
        </div>
    </>
)

const photoTab = (
    <>
        <div className="text-left w-2/3 float-left">
            <p className="text-lg">
                <h1>Photographer</h1>
                It's hard to catch me without a camera when I'm travelling to new destinations with friends or family.
                It lets me tap into my creative side and exercise my eye for detail, while also being constantly amazed by the endless possibilities for expressing myself through the lens of a camera.
                I love the challenge of composing an image that tells a story and captures the motion of the world around me. 
                <br/>
                <br/>
                I'm currently rocking the Olympus EM-5 Mark III with a 12-40mm f/2.8 Pro lens.
                Its retro look and incredible image quality for such a compact size make it a blast to use.
            </p>
        </div>
        <div className="float-right w-1/3 my-auto">
            <img src={photo_1} href="#" className="icon p-5 active w-auto my-auto"/>
        </div>
    </>
)

const setActiveTab = (tab) => {
    return (
        <>
        {tab}
        </>
    )
}

const nav_content = {
    [adobe]: adobeTab,
    [headphones]: headphonesTab,
    [terminal]: terminalTab,
    [camera]: photoTab,
    [keyboard]: keyboardTab
}

function About() {
    const [activeTab, setActiveTab] = useState(terminal);
    let itemsMap = items.map((item) => (
        <img    
            src={item}
            className={"mx-5 my-5 navIcon max-w-xs hover:scale-110 hover:opacity-100 transition duration-300 ease-in-out " + (item === activeTab ? "opacity-100" : "opacity-10")}
            onClick={() => setActiveTab(item)}
        />
    ));
    
  return (
    <div className="flex justify-center">
        <div className="w-full max-w-[1024px]">
            <div className="text-center py-5">
                <h1 className="text-3xl">About Me</h1>
                <div className="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                    <div className="items-center nav">
                        {itemsMap}
                    </div>
                </div>
                <div className="bg-gray-900 rounded-bl-lg rounded-br-lg">
                    <div className="flex p-5">
                        {nav_content[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;