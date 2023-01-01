const ProjectItem = ({ project }) => {
  const { title, description, image, links, src } = project;
  return (
    <div className="my-3 mx-1 flex h-full w-96 flex-col items-center justify-center rounded-lg border border-neutral-600 border-opacity-50 bg-neutral-800">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <a
          href={src}
          className="h-full w-full"
          target="_blank"
          rel="noreferrer">
          <img
            className="h-64 w-full rounded-tl-lg rounded-tr-lg object-cover opacity-100 shadow-2xl transition duration-100 hover:opacity-80"
            src={image}
            alt="project"
          />
        </a>
        <div className="flex h-full w-full flex-col px-3 pb-4 pt-2">
          <h1 className="text-center text-2xl font-semibold">{title}</h1>
          <p className="border-t border-b border-neutral-700 py-2 text-center">
            {description}
          </p>
          {/* <a className="text-3xl mt-2 opacity-40 hover:opacity-100 transition duration-100" href={link}>
            <i className={icons_dict["Github"]} />
          </a> */}
          <div className="mt-3 flex flex-row content-start justify-start">
            {links.map((link, index) => (
              <a
                className={
                  "mx-1 flex flex-row rounded-sm bg-neutral-700 px-3 pt-2 pb-[6px] text-2xl opacity-60 transition duration-100 hover:opacity-100 active:opacity-40"
                }
                href={link.src}
                target="_blank"
                rel="noreferrer"
                key={index}>
                {link.img && <i className={"" + link.img} />}
                <p className="my-auto mx-2 text-sm leading-7">{link.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
