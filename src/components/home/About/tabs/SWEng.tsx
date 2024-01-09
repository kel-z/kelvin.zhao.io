import icons_dict from "lib/icons";

const skills = [
  "Python",
  "TypeScript",
  "AWS CDK",
  "Angular",
  "React",
  "Electron"
];
const skillsList = skills.map((skill, index) => (
  <div key={index}>
    <p className="mr-1 mt-1 rounded-lg bg-neutral-800 p-2 py-2 leading-none sm:mx-0 sm:mb-2 sm:mt-0">
      <i className={icons_dict[skill]} />
      {" " + skill}
    </p>
  </div>
));

const terminalTab = (
  <div className="inline w-full justify-between sm:flex">
    <div className="text-left text-lg sm:w-2/3">
      <h5>Software Engineer</h5>
      <p>
        As a computer science student at the University of British Columbia
        (UBC), I am actively looking for ways to build on top of my technical
        skills and drive value back into the communities that I am a part of.
        <br />
        <br />
        So far, this has taken shape in the form of various iterative projects
        that I've started, including developing and maintaining a web app that
        helps UBC students during course registration by automatically emailing
        them when a seat opens up in a course they want to take. I also trained
        and implemented an OCR-based scanner that automatically scans and
        exports all account data for a game so nerds like me can import that
        data into fan-made optimization apps for the best character loadouts to
        do as much theoretical damage as possible in-game.
        <br />
        <br />
        Anyways, if these projects have taught me anything, it's that I love
        building and contributing to products that people can use to make their
        lives easier or simply for my own amusement.
      </p>
    </div>
    <div className="flex flex-wrap sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

export default terminalTab;
