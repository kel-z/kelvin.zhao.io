import prometric from "public/images/prometric.png";
import sony from "public/images/sony.png";

const content = [
  {
    company: "Sony Pictures Imageworks",
    title: "Software Developer Co-op",
    date: "July 2023 - Jan 2024",
    location: "Vancouver, BC, CAN",
    description: (
      <>
        <p>
          Currently developing proprietary applications with the infrastructure
          team for animators and artists to use in their day-to-day work. More
          details to come!
        </p>
        <p className="mt-3 italic text-neutral-400">
          This is honestly such a cool opportunity. Spider-verse is one of my
          favourite movies of all time, and the fact that I get to work at the
          studio that made it is such a unique experience.
        </p>
      </>
    ),
    skills: [
      "Python",
      "TypeScript",
      "Angular",
      "Electron",
      "Flask",
      "Docker",
      "Apache",
    ],
    image: sony,
    href: "https://www.imageworks.com/",
  },
  {
    company: "Prometric",
    title: "Software Developer Co-op",
    date: "Jan 2022 - Aug 2022",
    location: "Vancouver, BC, CAN",
    description: (
      <>
        <p>
          Developed 35+ full-stack feature requirements across several internal
          company web applications. Scoped, designed, and implemented changes
          from scratch in collaboration with company stakeholders using C# and
          Angular.
          <br />
          Optimized several administrative processes, which led to the creation
          of new APIs and UI components, complex SQL queries, and robust batch
          jobs.
        </p>
        <p className="mt-3 italic text-neutral-400">
          My first internship! I was responsible for building new features and
          improving the overall productivity of the company personnel that use
          these applications. This was my first taste of being a full-stack
          developer, and I had the honour to work with many talented people in
          my team.
        </p>
      </>
    ),
    skills: ["Angular", "C#", ".NET", "Jenkins", "MSSQL"],
    image: prometric,
    href: "https://www.prometric.com/",
  },
];

export default content;
