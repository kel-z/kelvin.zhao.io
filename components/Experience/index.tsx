import React from "react";
import ExperienceItem from "./ExperienceItem";
import experiences from "./ExperienceList";

function Experience() {
  return (
    <div className="mx-5 flex justify-center lg:mx-0">
      <div className="w-full max-w-[1024px]">
        <div className="my-20 space-y-4">
          <h4 className="text-center text-3xl font-semibold">Experience</h4>
          {experiences.map((experience, index) => (
            <ExperienceItem experience={experience} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
