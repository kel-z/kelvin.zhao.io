import icons_dict from "../../../lib/icons";

const skills = ["AWS CDK", "Next.js", "TypeScript", "Python", "Java", "C#"];
const skillsList = skills.map((skill, index) => (
  <div key={index}>
    <p className="mr-1 mt-1 rounded-lg bg-neutral-800 p-2 py-2 leading-none sm:mx-0 sm:mb-2 sm:mt-0">
      <i className={icons_dict[skill]} />
      {" " + skill}
    </p>
  </div>
));

const terminalTab = (
  <div className="inline sm:flex">
    <div className="text-left text-lg sm:float-left sm:w-2/3">
      <h5>Software Engineer</h5>
      <p>
        First and foremost, I’m a developer at heart. My endless cycle of making
        and breaking code started when I picked up Lua at the age of 8, after
        trying so desperately to make an event-triggered door open in Roblox.
        <br />
        <br />
        Since then, I've taken pride in developing apps and services that
        positively impact the people who use it. I'm particularly interested in
        back-end development, as I enjoy the challenge of building scalable and
        reliable systems.
        <br />
        <br />
        Unsurprisingly, I decided to make it my career. I am currently pursuing
        a Bachelor of Science degree at UBC with Computer Science as my major.
      </p>
    </div>
    <div className="flex flex-wrap sm:float-right sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

export default terminalTab;
