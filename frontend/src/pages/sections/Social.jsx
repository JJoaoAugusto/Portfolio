import wpp from "../../assets/wpp.svg";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";

export const Social = () => {
  return (
    <section
      id="social"
      className="w-full h-[1400px] lg:h-[1000px] z-10 flex justify-center items-center border-b-4 border-gray-2 bg-gray-1 text-gray-2"
    >
      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-8">
        <div className="w-full max-w-sm h-[350px] lg:h-[450px] flex flex-col gap-8">
          <h2 className="text-3xl text-gray-4 font-bold">
            Vamos começar uma conversa e
            <span className="text-purple-2">
              {" "}
              desenvolver nossa criatividade
            </span>{" "}
            juntos?
          </h2>
          <p>
            Clique em iniciar conversa na sessão de WhatsApp ao lado para
            podermos conversar!
          </p>
        </div>
        <ul className="w-full max-w-md flex flex-col gap-10">
          <li className="w-full gap-4 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start">
            <figure className="flex justify-center items-center bg-green-1 min-w-[100px] min-h-[100px] rounded-2xl">
              <img src={wpp} alt="Ícone do WhatsApp" className="" />
            </figure>
            <div className="w-full flex flex-col gap-4 lg:pl-8">
              <h3 className="text-gray-4 text-lg font-bold">Meu Contato</h3>
              <p>
                Estou disponível para um chat de voz, vamos falar de
                criatividade juntos?
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=+55+51992252108&text=Ola"
                target="blank"
                className="w-fit hover:text-gray-4 "
              >
                Iniciar conversa agora
              </a>
            </div>
          </li>

          <li className="w-full gap-4 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start">
            <figure className="flex justify-center items-center bg-social-2 min-w-[100px] min-h-[100px] rounded-2xl">
              <img src={email} alt="Ícone do E-mail" className="" />
            </figure>
            <div className="flex flex-col gap-4 lg:pl-8">
              <h3 className="text-gray-4 text-lg font-bold">Meu E-mail</h3>
              <p>Me envie um e-mail relatando sugestões, feedbacks e ideias!</p>
              <a
                href="mailto:jaugustovpires@gmail.com"
                target="blank"
                className="w-fit hover:text-gray-4"
              >
                Enviar e-mail agora
              </a>
            </div>
          </li>

          <li className="w-full gap-4 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start">
            <figure className="flex justify-center items-center bg-social-1 min-w-[100px] min-h-[100px] rounded-2xl">
              <img src={linkedin} alt="Ícone do Linkedin" className="" />
            </figure>
            <div className="flex flex-col gap-4 lg:pl-8">
              <h3 className="text-gray-4 text-lg font-bold">Meu Linkedin</h3>
              <p>
                Podemos criar interações mais constantes, bem como compartilhar
                network!
              </p>
              <a
                href="https://www.linkedin.com/in/joao-augusto-vieira/"
                target="blank"
                className="w-fit hover:text-gray-4 "
              >
                Ir para o Linkedin agora
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
