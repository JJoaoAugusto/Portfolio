import github from "../../assets/github.svg";
import share from "../../assets/share.svg";

export const Projects = () => {
  return (
    <section className="w-full h-[1000px] flex flex-col items-center justify-center bg-gray-0 text-gray-4">
      <div className="w-full max-w-5xl flex flex-col">
        <div className="w-full flex flex-col gap-2 p-8">
          <h2>Meus projetos</h2>
          <p>
            Projetos criados durante o curso fullstack da
            <span className="text-pink-1"> Kenzie Academy</span>
          </p>
        </div>

        <ul className="w-full flex flex-wrap justify-between">
          <li className="flex flex-col w-full max-w-md p-8 gap-6">
            <div className="flex flex-col w-full max-w-md gap-3">
              <h1>Nome-Projeto</h1>
              <p>
                Linguagens: <span>NomeLinguagem</span>
              </p>
              <p>
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, possimus? Sunt, incidunt repudiandae quibusdam
                tempora, odio expedita vel illo optio nostrum excepturi aperiam
                ullam velit commodi voluptate magnam rem est?
              </p>
            </div>
            <div className="flex justify-between">
              <figure className="w-36 flex justify-between items-center">
                <img src={github} alt="Ícone do Github" />
                <p>Github Code</p>
              </figure>
              <figure className="flex w-24 justify-between items-center">
                <img src={share} alt="Ícone share leva para a aplicação" />
                <p>Aplicação</p>
              </figure>
            </div>
          </li>

          <li className="flex flex-col w-full max-w-md p-8 gap-6">
            <div className="flex flex-col w-full max-w-md gap-3">
              <h1>Nome-Projeto</h1>
              <p>
                Linguagens: <span>NomeLinguagem</span>
              </p>
              <p>
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, possimus? Sunt, incidunt repudiandae quibusdam
                tempora, odio expedita vel illo optio nostrum excepturi aperiam
                ullam velit commodi voluptate magnam rem est?
              </p>
            </div>
            <div className="flex justify-between">
              <figure className="w-36 flex justify-between items-center">
                <img src={github} alt="Ícone do Github" />
                <p>Github Code</p>
              </figure>
              <figure className="flex w-24 justify-between items-center">
                <img src={share} alt="Ícone share leva para a aplicação" />
                <p>Aplicação</p>
              </figure>
            </div>
          </li>

          <li className="flex flex-col w-full max-w-md p-8 gap-6">
            <div className="flex flex-col w-full max-w-md gap-3">
              <h1>Nome-Projeto</h1>
              <p>
                Linguagens: <span>NomeLinguagem</span>
              </p>
              <p>
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, possimus? Sunt, incidunt repudiandae quibusdam
                tempora, odio expedita vel illo optio nostrum excepturi aperiam
                ullam velit commodi voluptate magnam rem est?
              </p>
            </div>
            <div className="flex justify-between">
              <figure className="w-36 flex justify-between items-center">
                <img src={github} alt="Ícone do Github" />
                <p>Github Code</p>
              </figure>
              <figure className="flex w-24 justify-between items-center">
                <img src={share} alt="Ícone share leva para a aplicação" />
                <p>Aplicação</p>
              </figure>
            </div>
          </li>

          <li className="flex flex-col w-full max-w-md p-8 gap-6">
            <div className="flex flex-col w-full max-w-md gap-3">
              <h1>Nome-Projeto</h1>
              <p>
                Linguagens: <span>NomeLinguagem</span>
              </p>
              <p>
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut, possimus? Sunt, incidunt repudiandae quibusdam
                tempora, odio expedita vel illo optio nostrum excepturi aperiam
                ullam velit commodi voluptate magnam rem est?
              </p>
            </div>
            <div className="flex justify-between">
              <figure className="w-36 flex justify-between items-center">
                <img src={github} alt="Ícone do Github" />
                <p>Github Code</p>
              </figure>
              <figure className="flex w-24 justify-between items-center">
                <img src={share} alt="Ícone share leva para a aplicação" />
                <p>Aplicação</p>
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
