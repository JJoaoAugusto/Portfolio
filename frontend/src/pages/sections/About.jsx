import background from "../../assets/background.svg";
import profile from "../../assets/profile.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import node from "../../assets/node.svg";
import react from "../../assets/react.svg";

export const About = () => {
  return (
    <section
      id="home"
      className="bg-contain w-full h-[1000px] flex flex-col items-center justify-center bg-gray-1 text-gray-4 mt-16"
    >
      <div className="w-full max-w-7xl max-h-screen flex items-center justify-between p-8">
        <div className="w-full max-w-lg flex flex-col gap-10">
          <figure className="w-[320px] flex items-center justify-between">
            <img
              src={profile}
              alt="Minha foto de perfil"
              className="h-20 rounded-full"
            />
            <p className="text-gray-3">Olá! Meu nome é João Augusto</p>
          </figure>

          <div className="w-full max-w-md flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              Eu <span className="text-purple-2">amo</span> criar e
              <span className="text-purple-2"> desenvolver</span> projetos
            </h1>
            <p className="text-gray-2">
              Descubra aqui nesse portfólio, criado especialmente para você,
              todos meus projetos e tecnoligias
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

          <ul className="w-full max-w-md flex items-center justify-between">
            <li>
              <img src={html} alt="Ícone do Html5" />
            </li>
            <li>
              <img src={css} alt="Ícone do Css3" />
            </li>
            <li>
              <img src={javascript} alt="Ícone do JavaScript" />
            </li>
            <li>
              <img src={node} alt="Ícone do nodeJs" />
            </li>
            <li>
              <img src={react} alt="Ícone do React" />
            </li>
          </ul>
        </div>

        <figure className=" w-full max-w-lg">
          <img src={background} alt="" className="w-100%" />
        </figure>
      </div>
    </section>
  );
};
