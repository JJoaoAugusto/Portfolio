import { useContext } from "react";
import github2 from "../../assets/github2.svg";
import share from "../../assets/share.svg";
import { ProjectsContext } from "../../providers/projectsContext";

export const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <section
      id="projects"
      className="w-full py-20 z-10 flex flex-col items-center justify-center bg-gray-0 text-gray-4"
    >
      <div className="w-full max-w-7xl flex flex-col">
        <div className="w-full flex flex-col gap-2 p-8">
          <h2 className="text-2xl font-bold">Meus projetos</h2>
          <p>
            Projetos criados durante o curso fullstack da
            <span className="text-pink-1"> Kenzie Academy</span>
          </p>
        </div>

        <ul className="w-full flex flex-wrap justify-between text-gray-2">
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                className="flex flex-col w-full max-w-md p-8 gap-6"
              >
                <div className="flex flex-col w-full max-w-md gap-3">
                  <h1 className="text-3xl font-bold text-gray-3">
                    {project.name}
                  </h1>
                  <p>
                    Linguagens: <span>{project.language}</span>
                  </p>
                  <p>{project.description}</p>
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.git_url}
                    target="blank"
                    className="flex w-[120px] justify-between items-center"
                  >
                    <img src={github2} alt="Ícone do Github" className="w-6" />
                    <p>Github Code</p>
                  </a>
                  <a
                    href={project.git_url}
                    target="blank"
                    className="flex w-[100px] justify-between items-center"
                  >
                    <img
                      src={share}
                      alt="Ícone share leva para a aplicação"
                      className="w-6"
                    />
                    <p>Aplicação</p>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
