import Headshot from "../../public/images/PC260020.png";
import Image from "next/image";

const Status = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1024px]">
        <div className="mt-10 mb-16">
          <div className="rounded-lg border border-[#006868] bg-gradient-to-br from-[#003535] to-[#000000] p-5">
            <div className="grid sm:flex sm:flex-row">
              <Image
                className="mx-auto h-32 w-32 rounded-full sm:mx-0"
                src={Headshot}
                alt="Headshot"
              />

              <div className="ml-5">
                <h1 className="text-3xl font-semibold">Kelvin Zhao</h1>
                <p>
                  I am currently seeking a fall internship for
                  2023! If you are interested in working with me or just want to
                  chat, feel free to connect with me via email or LinkedIn!
                </p>

                <div>
                  <a href="mailto:zhao0kelvin@gmail.com" className="mr-3">
                    <button className="mt-3 rounded-full border border-[#006868] bg-[#006868] bg-opacity-0 py-1 px-4 font-medium text-white transition-all duration-100 hover:bg-opacity-100 active:bg-opacity-70">
                      Email
                    </button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kel-z/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3"
                  >
                    <button className="mt-3 rounded-full border border-[#006868] bg-[#006868] bg-opacity-0 py-1 px-4 font-medium text-white transition-all duration-100 hover:bg-opacity-100 active:bg-opacity-70">
                      LinkedIn
                    </button>
                  </a>

                  <a
                    href="https://github.com/kel-z"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3"
                  >
                    <button className="mt-3 rounded-full border border-[#006868] bg-[#006868] bg-opacity-0 py-1 px-4 font-medium text-white transition-all duration-100 hover:bg-opacity-100 active:bg-opacity-70">
                      Github
                    </button>
                  </a>

                  <a
                    href="/assets/kelvinzhao_resume2023.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="mt-3 rounded-full border border-[#006868] bg-[#006868] bg-opacity-100 py-1 px-4 font-medium text-white transition-all duration-100 hover:bg-opacity-60 active:bg-opacity-30">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
