import { useState } from "react";
import { portofolios } from "../sources/portofolio";
import { TPortofolio } from "../types/portofolio";

const Project = () => {
  const dataProject: TPortofolio[] = portofolios;

  const [isActive, setIsActive] = useState("all");

  function selectedPortofolio(title: string) {
    setIsActive(title);
  }

  const filterClientPortofolio = dataProject.filter(
    (name) => name.category === "client"
  );
  const filterPersonalPortofolio = dataProject.filter(
    (name) => name.category === "personal"
  );

  const filteredPortofolio =
    isActive === "all"
      ? dataProject
      : isActive === "client"
      ? filterClientPortofolio
      : filterPersonalPortofolio;

  return (
    <div className="w-full min-h-full">
      <div className="w-full md:w-1/2 md:mx-auto p-3">
        <h3 className="font-semibold text-xl mb-5 underline underline-offset-8 decoration-3 decoration-second ">
          My Project
        </h3>

        <div className="w-full mb-5 flex items-center gap-x-3">
          <button
            onClick={() => selectedPortofolio("all")}
            className={`${
              isActive == "all"
                ? "text-second underline underline-offset-8 decoration-3 decoration-second"
                : ""
            } cursor-pointer hover:text-second font-semibold rounded p-2 text-md`}
          >
            All Project
          </button>
          <button
            onClick={() => selectedPortofolio("client")}
            className={`${
              isActive == "client"
                ? "text-second underline underline-offset-8 decoration-3 decoration-second"
                : ""
            } font-semibold rounded p-2 text-md cursor-pointer hover:text-second`}
          >
            Client Project
          </button>
          <button
            onClick={() => selectedPortofolio("personal")}
            className={`${
              isActive == "personal"
                ? "text-second underline underline-offset-8 decoration-3 decoration-second"
                : "no-underline "
            } font-semibold rounded p-2 text-md `}
          >
            Personal Project
          </button>
        </div>

        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-10">
          {filteredPortofolio.map((item) => (
            <a
              href={item.link}
              target="_blank"
              key={item.title}
              className="rounded shadow transition-all duration-300 ease-in-out overflow-hidden hover:shadow-xl"
            >
              <div className="w-full h-32 overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>
              <div className="w-full p-3">
                <h1 className="font-bold">{item.title}</h1>
                <p className="font-light text-sm">{item.desk}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
