import wpp from "../assets/wpp.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-gray-0 text-gray-4 border-b-[50px] border-gray-1">
      <div className="w-full max-w-5xl flex items-center justify-between p-8">
        <section className="w-full max-w-sm flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <h2>Obrigado!</h2>
            <span>Me siga nas minhas redes sociais e vamos conversar</span>
          </div>
        </section>
        <section className="w-full max-w-[200px]">
          <ul className="w-full flex justify-between items-center">
            <li>
              <figure className="flex justify-center items-center bg-green-1 min-w-[50px] min-h-[50px] rounded-full">
                <img src={wpp} alt="Ícone do WhatsApp" />
              </figure>
            </li>
            <li>
              <figure className="flex justify-center items-center bg-social-2 min-w-[50px] min-h-[50px] rounded-full">
                <img src={email} alt="Ícone do Email" />
              </figure>
            </li>
            <li>
              <figure className="flex justify-center items-center bg-social-1 min-w-[50px] min-h-[50px] rounded-full">
                <img src={linkedin} alt="Ícone do Linkedin" />
              </figure>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
