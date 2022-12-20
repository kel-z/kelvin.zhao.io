import '../styles/Landing.css';
import React from 'react';

function Landing() {
  return (
    <div class="flex items-center h-screen justify-center">
      <div>
        <div class="text-center">
          <h1 class="text-6xl">Hi, I'm Kelvin.</h1>
          {/* <h2 class="text-xl">.</h2> */}
        </div>  
        <div class="">
          <p class="pt-5">
          > <a href="mailto:zhao0kelvin@gmail.com">zhao0kelvin@gmail.com</a>
          <br />
          > <a href="https://www.linkedin.com/in/kel-z/">linkedin</a>
          <br />
          > <a href="https://github.com/kel-z">github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
