import photo_keyboard from "public/images/PC290021-min.jpg";
import Image from "next/image";

const keyboardTab = (
  <div className="inline sm:flex">
    <div className="text-left sm:w-2/3 md:float-left">
      <h5>Keyboard Hobbyist</h5>
      <p>
        Recently, I've been getting into mechanical keyboards after a friend of
        mine introduced me to the hobby. In fact, I'm typing this on my first
        custom-built keyboard — an 80% keyboard (Tiger 80 Lite) with Boba U4T
        switches and a custom keycap set.
        <br />
        <br />
        If you were to tell me a year ago that I'd be spending hours researching
        and putting slabs of foam into my keyboard, I might've brought you in
        for a health checkup. But I think this outcome was inevitable — many of
        my friends are keyboard geeks, and I've always been fascinated by the
        idea of building and customizing something from scratch.
      </p>
    </div>
    <div className="mt-5 w-full px-10 sm:float-right sm:my-auto sm:inline sm:w-1/3">
      <Image
        src={photo_keyboard}
        className="rounded-lg transition duration-500 ease-in-out sm:hover:scale-110"
        alt="Tiger 80 lite keyboard"
        loading="eager"
      />
    </div>
  </div>
);

export default keyboardTab;
