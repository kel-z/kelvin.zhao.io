import React from "react";
import prometric from "../../public/images/prometric.png";
import icons_dict from "../../lib/icons";
import Image from "next/image";

const skills = ["C#", "Angular", ".NET", "Jenkins", "MSSQL"];

function Experience() {
  return (
    <div className="mx-5 flex justify-center lg:mx-0">
      <div className="w-full max-w-[1024px]">
        <div className="my-20">
          <h4 className="text-center text-3xl font-semibold">Experience</h4>
          <div className="grid-cols-4 gap-5 sm:grid">
            <div>
              <a
                href="https://www.prometric.com/"
                target="_blank"
                rel="noreferrer">
                <Image
                  src={prometric}
                  alt="prometric"
                  className="cursor-pointer justify-center rounded-xl bg-white px-5 transition duration-200 hover:opacity-80 md:hover:-translate-y-[2px]"
                />
              </a>
              <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <p className="mr-2 mt-2 rounded-lg bg-neutral-800 px-3 pt-1 text-base">
                      <i className={icons_dict[skill]} />
                      {" " + skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 mt-3 bg-neutral-900 p-4 pt-3 sm:mt-0">
              <div className="flex flex-col justify-between sm:flex-row">
                <h5>Prometric</h5>
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
                stakeholders using C# and Angular.
                <br />
                Optimized several administrative processes, which led to the
                creation of new APIs and UI components, complex SQL queries, and
                robust batch jobs.
              </p>
              <p className="mt-3 italic text-neutral-400">
                My first internship! I was responsible for building new features
                and improving the overall productivity of the company personnel
                that use these applications. This was my first taste of being a
                full-stack developer, and I had the honour to meet many great
                people in my team. Many of my tickets were related to optimizing
                several administrative processes — which required a lot of
                problem-solving and collaboration with the team — but I had a
                blast doing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
