import icons_dict from "@/lib/icons";

const skills = [
  "Java",
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
        I graduated from the University of British Columbia (UBC) with a BSc in
        Computer Science in 2024.
        <br />
        <br />
        Outside of doing work things, I like building niche software for
        communities that I am part of. I also like troubleshooting code for
        friends that don't have a background in computer science.
      </p>
    </div>
    <div className="flex flex-wrap sm:inline sm:w-1/3 sm:px-5">
      {skillsList}
    </div>
  </div>
);

export default terminalTab;
