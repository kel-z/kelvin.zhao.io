import Image from "next/image";
import photo_lights from "public/images/PC290731-min.jpg";

const photoTab = (
  <div className="inline w-full justify-between gap-5 sm:flex">
    <div className="mb-5 text-left sm:mb-0">
      <h5>Photographer</h5>
      <p>
        My role during most trips whenever I travel with family or friends is
        that I'm the one who brings and holds a camera. Personally, I was never
        a big fan of being asked to stop what I was doing just for a photo,
        which is why I tend to focus on taking candid photos whenever I see any
        good opportunity to do so.
        <br />
        <br />
        My favourite photos are often the spontaneous ones, and it results in
        much more exciting photos to look back on. It also lets me appreciate
        travelling in a different way since I'm constantly looking around for
        that next photo op.
        <br />
        <br />I like to go through old photos from time to time, and recently
        I've been posting the ones that I like on{" "}
        <a
          href="https://www.instagram.com/njik/"
          className="underline hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        . Feel free to check it out!
      </p>
    </div>
    <div className="mx-auto w-fit flex-shrink-0 overflow-hidden rounded-lg sm:my-auto sm:inline">
      <Image
        src={photo_lights}
        className="w-60 transition duration-500 ease-in-out hover:scale-105"
        alt="Friend holding a bundle of lights"
        loading="eager"
      />
    </div>
  </div>
);

export default photoTab;
