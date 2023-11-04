import icons_dict from "lib/icons";
import Image from "next/image";

const ExperienceItem = ({ experience }) => {
  const { company, title, date, location, description, skills, image, href } =
    experience;
  return (
    <div className="grid-cols-4 gap-4 sm:grid">
      <div className="col-span-1">
        <a href={href} target="_blank" rel="noreferrer">
          <Image
            src={image}
            alt={company}
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
          <h5>{company}</h5>
          <h5 className="text-neutral-600">{date}</h5>
        </div>
        <div className="mb-3 flex flex-col justify-between border-b border-neutral-800 pb-3 sm:flex-row">
          <p>{title}</p>
          <p className="text-neutral-600">{location}</p>
        </div>
        {description}
      </div>
    </div>
  );
};

export default ExperienceItem;
