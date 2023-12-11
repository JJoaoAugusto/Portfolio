import wpp from "../assets/wpp.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <footer className="w-full h-96 flex items-center justify-center bg-gray-0 text-gray-4">
      <div className="w-full max-w-7xl h-full flex flex-col items-start justify-around p-8">
        <div className="w-full max-w-md flex flex-col gap-4">
          <h2>Obrigado!</h2>
          <span>Me mande um e-amil ou me adicione no WhatsApp!</span>
        </div>

        <ul className="w-full max-w-sm flex flex-col justify-start gap-2 pb-10">
          <li className="w-full">
            <figure className="w-full p-2 flex justify-center items-center rounded-full bg-green-1 ">
              <img src={wpp} alt="Ícone do WhatsApp" />
              <p className="px-2">+55 51 992252108</p>
            </figure>
          </li>
          <li className="w-full">
            <figure className="w-full p-2 flex justify-center items-center rounded-full bg-social-2">
              <img src={email} alt="Ícone do Email" />
              <p className="px-2">jaugustovpires@gmail.com</p>
            </figure>
          </li>
        </ul>
      </div>
    </footer>
  );
};
