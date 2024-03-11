import wpp from "../assets/wpp.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <footer className="w-full absolute z-10 h-80 flex items-center justify-center bg-gray-0 text-gray-3">
      <div className="w-full max-w-7xl h-full p-8 gap-4 flex flex-col items-start justify-center">
        <div className="w-full max-w-md flex flex-col gap-2">
          <h2>Obrigado pela visita!</h2>
          <span>Contatos:</span>
        </div>
        <figure className="w-full flex justify-start items-start">
          <img src={wpp} alt="Ícone do WhatsApp" />
          <p className="px-2">+55 51 992252108</p>
        </figure>
        <figure className="w-full flex justify-start items-start">
          <img src={email} alt="Ícone do Email" />
          <p className="px-2">jaugustovpires@gmail.com</p>
        </figure>
      </div>
    </footer>
  );
};
