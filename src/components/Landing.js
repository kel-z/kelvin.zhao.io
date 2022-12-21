import React from 'react';

function Landing() {
  return (
    <>
    {/* <div className="flex h-screen">
    </div> */}
    <div className="flex items-center h-screen justify-center animate-[fade-in_1s_ease-in-out]">
      <div>
        <div className="text-center">
          <h1 className="text-6xl">Hi, I'm Kelvin.</h1>
          {/* <h2 class="text-xl">.</h2> */}
        </div>  
        <div>
          <p className="pt-5">
          {'>'} <a className="underline hover:no-underline" href="mailto:zhao0kelvin@gmail.com">zhao0kelvin@gmail.com</a>
          <br />
          {'>'} <a className="underline hover:no-underline" href="https://www.linkedin.com/in/kel-z/">linkedin</a>
          <br />
          {'>'} <a className="underline hover:no-underline" href="https://github.com/kel-z">github</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;
