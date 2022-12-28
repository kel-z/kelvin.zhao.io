const ProjectItem = ({ project }) => {
  const { title, description, image, links } = project;
  return (
    <div className="w-96 h-full flex flex-col items-center justify-center my-3 mx-1 rounded-lg bg-neutral-800 border border-neutral-600 border-opacity-50">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          className="w-full h-64 object-cover shadow-2xl rounded-tl-lg rounded-tr-lg"
          src={image}
          alt="project"
        />
        <div className="w-full h-full flex flex-col px-3 pb-4 pt-2">
          <h1 className="text-center font-semibold text-2xl">{title}</h1>
          <p className="text-center border-t border-b border-neutral-700 py-2">
            {description}
          </p>
          {/* <a className="text-3xl mt-2 opacity-40 hover:opacity-100 transition duration-100" href={link}>
            <i className={icons_dict["Github"]} />
          </a> */}
          <div className="flex flex-row mt-3 justify-start content-start">
            {links.map((link) => (
              <a
                className={
                    "text-2xl opacity-40 hover:opacity-100 transition duration-100 bg-neutral-700 pt-2 pb-[6px] px-3 rounded-sm flex flex-row mx-1 active:opacity-40"
                  }
                href={link.src}
                target="_blank"
                rel="noreferrer">
                {link.img && <i className={"" + link.img} />}
                <p className="text-sm my-auto mx-2 leading-7">{link.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
