import wpp from "../assets/wpp.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <footer>
      <section>
        <figure>
          <img src="../assets/profile.png" alt="Minha foto de perfil" />
        </figure>
        <div>
          <h2>Obrigado!</h2>
          <span>Me siga nas minhas redes sociais e vamos conversar</span>
        </div>
      </section>
      <section>
        <ul>
          <li>
            <img className="" src={wpp} alt="Ícone do WhatsApp" />
          </li>
          <li>
            <img className="" src={linkedin} alt="Ícone do Linkedin" />
          </li>
          <li>
            <img src={email} alt="Ícone do Email" />
          </li>
        </ul>
      </section>
    </footer>
  );
};
