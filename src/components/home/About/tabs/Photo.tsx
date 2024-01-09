import Image from "next/image";
import photo_lights from "public/images/PC290731-min.jpg";

const photoTab = (
  <div className="inline w-full justify-between gap-5 sm:flex">
    <div className="mb-5 text-left sm:mb-0">
      <h5>Photographer</h5>
      <p>
        As the unspoken designated shutterbug of the group when I'm travelling
        to new destinations with friends or family, it's hard to catch me
        without a camera in my hand or in my bag.
        <br />
        <br />
        The world around us goes by too fast sometimes, and my way of slowing it
        down is by taking small snapshots of it one moment at a time. I almost
        never stop to compose a good photo most of the time, since I've found
        that the best photos are usually the ones that are taken in the moment
        (even if it takes a few hundred tries to get one good one).
        <br />
        <br />
        My go-to gear is the OM-D EM-5 Mark III and the Olympus 12-40mm f/2.8
        Pro lens. Olympus' retro camera body look and impressive image quality
        for such a compact size make it an incredibly fun combination to use.
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
