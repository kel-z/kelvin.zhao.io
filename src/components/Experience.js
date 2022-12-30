import React from "react";
import paragon from "../images/paragon-logo-grey.png";
import icons_dict from "./Tags";

const skills = ["C#", "Angular", ".NET", "Jenkins", "MSSQL"];

function Experience() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1024px]">
        <div className="my-20">
          <h4 className="text-center text-3xl font-semibold">Experience</h4>
          <div className="grid-cols-4 gap-5 sm:grid">
            <div>
              <a
                href="https://www.paragontesting.ca/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={paragon}
                  alt="paragontesting"
                  className="cursor-pointer justify-center rounded-xl bg-white px-5 transition duration-200 hover:-translate-y-1 hover:scale-[1.05]"
                />
              </a>
              <div className="flex flex-wrap">
                {skills.map((skill) => (
                  <>
                    <p className="mr-2 mt-2 rounded-lg bg-neutral-800 px-3 pt-1 text-base">
                      <i className={icons_dict[skill]} />
                      {" " + skill}
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="col-span-3 mt-3 bg-neutral-900 p-4 pt-3 sm:mt-0">
              <div className="flex flex-col justify-between sm:flex-row">
                <h5>Paragon Testing Enterprises</h5>
                <h5 className="text-neutral-600">Jan 2022 - Aug 2022</h5>
              </div>
              <div className="mb-3 flex flex-col justify-between border-b border-neutral-800 pb-3 sm:flex-row">
                <p>Software Developer Intern</p>
                <p className="text-neutral-600">Vancouver, BC, CAN</p>
              </div>
              <p className="">
                Developed 35+ full-stack feature requirements across several
                internal company web applications. Scoped, designed, and
                implemented changes from scratch in collaboration with company
                stakeholders.
              </p>
              <p className="mt-3 italic text-neutral-400">
                My first internship! This was my first taste of being a
                full-stack developer, and I had the honour to meet many great
                people in my team. I worked on creating new APIs and features
                for the company's internal web applications, and I was able to
                learn a lot about the software development process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
