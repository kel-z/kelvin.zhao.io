import { Experience } from "lib/types";
import prometric from "public/images/prometric.png";
import sony from "public/images/sony.png";
import amazon from "public/images//amazon.png";

const content: Experience[] = [
  {
    company: "Amazon",
    title: "Software Development Engineer",
    date: "September 2024 - Present",
    location: "Vancouver, BC, CAN",
    description: (
      <>
        <p>TBD.</p>
        <p className="mt-3 italic text-neutral-400">
          My first full-time position after graduation! I'm very excited to see
          what's in store for me.
        </p>
      </>
    ),
    skills: [],
    image: amazon,
    href: "https://www.amazon.ca/"
  },
  {
    company: "Sony Pictures Imageworks",
    title: "Software Developer Co-op",
    date: "July 2023 - Jan 2024",
    location: "Vancouver, BC, CAN",
    description: (
      <>
        <p>
          Delivered a full-stack, cross-platform note management application
          using Angular, Flask, Oracle, and Electron that is highly integrated
          with the artists' workflow.
          <br />
          This app can be built and deployed as both a web or desktop
          application from a shared codebase and significantly contributes to
          the company's initiative for enhancing artist documentation discovery
          and accessibility.
        </p>
        <p className="mt-3 italic text-neutral-400">
          This was honestly such a cool opportunity. Spider-verse is one of my
          favourite movies of all time, and the fact that I contributed to the
          studio that made it (along with getting many sneak peeks of upcoming
          movies) was like a dream come true. I picked up from where the
          previous co-op left off with their simple Electron note app prototype,
          and I transformed it into a full-stack application that artists can
          use to easily create, categorize, and search notes through a web
          browser or desktop application.
          <br />
          My favourite part of this project were the opportunities to
          collaborate with the API and App team's co-op students as well! It had
          its own challenges but resulted in many great things as a result. I
          integrated Elasticsearch and made my project highly compatible with
          the other apps developed within the studio.
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
      "Apache"
    ],
    image: sony,
    href: "https://www.imageworks.com/"
  },
  {
    company: "Prometric",
    title: "Software Developer Co-op",
    date: "Jan 2022 - Aug 2022",
    location: "Remote (Vancouver, BC, CAN)",
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
    href: "https://www.prometric.com/"
  }
];

export default content;
