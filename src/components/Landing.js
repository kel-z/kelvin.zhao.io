import '../styles/Landing.css';
import React from 'react';

function Landing() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-6xl">Hi, I'm Kelvin.</h1>
          {/* <h2 class="text-xl">.</h2> */}
        </div>  
        <div className="links">
          <p className="pt-5">
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
