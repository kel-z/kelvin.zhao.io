import '../styles/About.css';
import React from 'react';

import adobe from '../images/adobe-ps-128.png';
import console from '../images/console-128.png';
import headphones from '../images/headphones-3-128.png';
import keyboard from '../images/keyboard-128.png';
import camera from '../images/slr-camera-128.png';
import code from '../images/code-2-256.png';

let items = [adobe, headphones, console, camera, keyboard];
let itemsMap = items.map((item) => (
    <img src={item} href="#" class={item == console ? "active navIcon" : "navIcon"}/>
));

function About() {
  return (
    <div class="flex justify-center">
        <div class="w-7/12">
            <div class="text-center py-5">
                <h1 class="text-3xl">About Me</h1>
                <div class="bg-gray-800 rounded-tl-lg rounded-tr-lg">
                    <div class="items-center">
                        {itemsMap}
                    </div>
                </div>
                <div class="bg-gray-900 rounded-bl-lg rounded-br-lg">
                    <div class="flex p-5">
                        <div class="text-left w-2/3 float-left">
                            <p class="text-lg">
                            <h1>Software Engineer</h1>
                            First and foremost, I’m a developer from the heart. My endless cycle of making and breaking code started when I picked up my first programming language (Lua) at the age of 8.
                            <br/>
                            <br/>
                            For me, back-end development is the perfect blend of creativity and problem-solving. I thrive in this type of environment and find it incredibly rewarding to use my skills to make a positive difference.
                            <br/>
                            <br/>
                            Unsurprisingly, I decided to make it my career. I am currently pursuing a Major in Computer Science at UBC.
                            </p>
                        </div>
                        <div class="float-right w-1/3 my-auto">
                            <img src={code} href="#" class="icon p-5 active w-auto mx-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;