import React, { useState } from 'react';
import adobe from '../images/adobe-ps-128.png';
import terminal from '../images/console-128.png';
import headphones from '../images/headphones-3-128.png';
import keyboard from '../images/keyboard-128.png';
import camera from '../images/slr-camera-128.png';
import code from '../images/code-2-256.png';
import photo_1 from '../images/PC290731.png';
import icons_dict from './Tags';

let items = [terminal, camera, keyboard];

const headphonesTab = (
    <></>
)

const adobeTab = (
    <></>
)

const keyboardTab = (
    <>
        <div className="text-left text-lg w-2/3 float-left">
            <h5>Keyboards</h5>
            <p>
                Recently, I've been getting into mechanical keyboards after a friend of mine introduced me to the hobby.
                In fact, I'm typing this on my first custom-built keyboard, an 80% keyboard (Tiger 80 Lite) with Boba U4T switches and a custom keycap set.
                <br/>
                <br/>
                If you were to tell me a year ago that I'd be spending hours researching and putting slabs of foam into my keyboard, I would've laughed in your face.
                But I think this outcome was inevitable -- many of my friends are keyboard geeks, and I've always been fascinated by the idea of building something from scratch.
            </p>
        </div>
        <div className="float-right w-1/3 my-auto">
            <img src={code} className="max-w-[100px] p-5 active w-auto mx-auto" alt="placeholder"/>
        </div>
    </>
)

const skills = ["AWS CDK", "TypeScript", "Python", "Java", "C#"]
const skillsList = skills.map((skill) =>
    <div className="">
        <p className="bg-neutral-800 text-lg pt-2 py-1 my-3 rounded-lg">
        <i className={icons_dict[skill]} />
        {" " + skill}
        </p>
    </div>
);

const terminalTab = (
    <>
        <div className="text-left text-lg w-2/3 float-left">
            <h5>Software Engineering</h5>
            <p>
                First and foremost, I’m a developer at heart.
                My endless cycle of making and breaking code started when I picked up my first programming language at the age of 8, after
                trying so desperately to make an event-triggered door open in ROBLOX using Lua.
                <br/>
                <br/>
                Since then, I've been hooked. I found that for me, back-end development is the perfect blend of creativity and problem-solving.
                I thrive in this type of environment and find it incredibly addicting to keep learning and using my skills to make a positive difference.
                <br/>
                <br/>
                Unsurprisingly, I decided to make it my career. I am currently pursuing a Major in Computer Science at UBC.
            </p>
        </div>
        <div className="float-right w-1/3 px-5">
            {skillsList}
        </div>
    </>
)

const photoTab = (
    <>
        <div className="text-left w-2/3 float-left">
            <p className="text-lg">
                <h5>Photography</h5>
                It's hard to catch me without a camera when I'm travelling to new destinations with friends or family.
                Doing photography taps into my creative side and exercises my eye for detail, and it lets me express myself through the lens of a camera.
                <br/>
                <br/>
                I love the challenge of composing an image that tells a story and captures the motion of the world around me.
                I still have much to learn about post-processing, however.
                <br/>
                <br/>
                I'm currently rocking the Olympus EM-5 Mark III with a 12-40mm f/2.8 Pro lens.
                Its retro look and incredible image quality for such a compact size make it a blast to use.
            </p>
        </div>
        <div className="float-right w-1/3 my-auto px-10">
            <img src={photo_1} className="icon w-auto rounded-lg hover:scale-110 transition duration-200 ease-in-out" alt="Friend holding a bundle of lights"/>
        </div>
    </>
)

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
            className={"w-1/5 inline pointer-events-auto mx-5 my-5 navIcon max-w-[40px] cursor-pointer hover:scale-110 hover:opacity-100 transition duration-100 ease-in-out " + (item === activeTab ? "opacity-100" : "opacity-10")}
            onClick={() => setActiveTab(item)}
            alt="navigation icon"
        />
    ));
    
  return (
    <div className="flex justify-center">
        <div className="w-full max-w-[1024px]">
            <div className="text-center my-5">
                <h1 className="font-semibold text-3xl">About Me</h1>
                <div className="bg-neutral-800">
                    <div className="items-center nav">
                        {itemsMap}
                    </div>
                </div>
                <div className="bg-neutral-900">
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