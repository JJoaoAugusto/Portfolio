import background from "../../assets/background.svg";
import github from "../../assets/github.svg";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaJava,
} from "react-icons/fa";
import { BiChevronUp } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

export const About = () => {
  return (
    <section
      id="home"
      className="bg-contain w-full py-28 flex flex-col items-center justify-center bg-gray-1 text-gray-4 mt-16"
    >
      <div className="w-full max-w-7xl flex items-center justify-center xl:justify-between p-8">
        <div className="w-full max-w-lg flex flex-col gap-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Eu <span className="text-purple-2">amo</span> criar e
              <span className="text-purple-2"> desenvolver</span> projetos
            </h1>
            <p className="text-gray-2">
              Descubra aqui nesse portfólio, criado especialmente para você,
              todos meus projetos e tecnologias
            </p>
            <p className="text-gray-2">
              Sou desenvolvedor Full Stack e desenvolvo projetos semanalmente
              afim de praticar novas tecnologias, bibliotecas e frameworks.
              Tenho muita familiaridade com inglês e com as documentações de
              todas as tecnologias que domino, assim como as suas boas práticas
              de desenvolvimento.
            </p>
          </div>

          <div className="flex w-60 items-center justify-between">
            <a href="#projects">
              <button className=" py-2 px-8 rounded-xl bg-purple-2 hover:bg-purple-1">
                Ver Projetos
              </button>
            </a>
            <a href="https://github.com/JJoaoAugusto" target="blank">
              <img src={github} alt="Ícone do Github" className="h-10" />
            </a>
          </div>

          <ul className="w-full flex flex-wrap items-center justify-center lg-justify-start  ">
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                HTML5
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaHtml5 className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                CSS3
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaCss3Alt className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                JavaScript
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaJs className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                TypeScript
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <SiTypescript className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                NodeJs
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaNode className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                React
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaReact className="w-16 h-16" title="React" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                Next
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <TbBrandNextjs className="w-16 h-16" t />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                PostgreSQL
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <SiPostgresql className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">Git</p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaGit className="w-16 h-16" t />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                Python
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaPython className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                TailwindCSS
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <SiTailwindcss className="w-16 h-16" />
            </li>
            <li className="group w-32 h-32 py-4 flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex text-xs text-gray-2">
                Java
              </p>
              <BiChevronUp className="hidden group-hover:flex" />
              <FaJava className="w-16 h-16" />
            </li>
          </ul>
        </div>

        <figure className="w-full max-w-lg hidden xl:flex lg justify-end items-start">
          <img src={background} alt="" className="fixed -top-60" />
        </figure>
      </div>
    </section>
  );
};
