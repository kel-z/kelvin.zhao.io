import Image from "next/image";
import photo_lights from "../../../public/images/PC290731-min.jpg";

const photoTab = (
  <div className="inline sm:flex">
    <div className="text-left sm:w-2/3 md:float-left">
      <p>
        <h5>Photographer</h5>
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
      <Image
        src={photo_lights}
        className="w-auto rounded-lg transition duration-500 ease-in-out hover:scale-110"
        alt="Friend holding a bundle of lights"
      />
    </div>
    <div className="my-auto mt-5 sm:hidden">
      <Image
        src={photo_lights}
        className="w-auto rounded-lg"
        alt="Friend holding a bundle of lights"
      />
    </div>
  </div>
);

export default photoTab;
