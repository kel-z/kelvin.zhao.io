import React from 'react';
import paragon from '../images/paragon-logo-grey.png';
import icons_dict from './Tags';

const skills = ["C#", "Angular", ".NET", "Jenkins", "MSSQL"]
const paragonSkillsList = skills.map((skill) =>
    <>
        <p className="bg-neutral-800 text-lg rounded-lg pt-1 px-3 mr-2 mt-2">
        <i className={icons_dict[skill]} />
        {" " + skill}
        </p>
    </>
);

function Experience() {
  return (
    <div className="flex justify-center">
        <div className="w-full max-w-[1024px]">
            <div className="my-20">
                <h4 className="font-semibold text-3xl text-center">Experience</h4>
                <div className="sm:grid grid-cols-4 gap-5">
                    <div>
                        <a href="https://www.paragontesting.ca/">
                            <img src={paragon} alt="paragontesting" className="justify-center cursor-pointer bg-white px-5 rounded-xl hover:-translate-y-1 hover:scale-[1.05] transition duration-200"/>
                        </a>
                        <div className="flex flex-wrap">
                        {paragonSkillsList}
                        </div>
                    </div>
                    <div className="col-span-3 bg-neutral-900 mt-3 sm:mt-0 p-4 pt-3">
                        <div className="flex flex-col justify-between sm:flex-row">
                            <h5>Paragon Testing Enterprises</h5>
                            <h5 className="text-neutral-600">Jan 2022 - Aug 2022</h5>
                        </div>
                        <div className="flex flex-col justify-between sm:flex-row mb-3">
                            <p>Software Developer Intern</p>
                            <p className="text-neutral-600">Vancouver, BC, CAN</p>
                        </div>
                        <p className="">
                            Developed 35+ full-stack feature requirements across several internal company web applications.
                            Scoped, designed, and implemented changes from scratch in collaboration with company stakeholders. 
                        </p>
                        <p className="mt-3 italic text-neutral-400">
                            My first internship! This was my first taste of being a full-time full-stack developer, and I had the honour to meet many great people in my team.
                            Because of them, I picked up many skills and assets that I can't wait to apply in my career going forward!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Experience;