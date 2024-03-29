import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/marcelogomes90"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={github} alt="github"></img>
        </a>
        <a
          href="https://www.instagram.com/marcelogomes90/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={insta} alt="instagram"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/marcelogomes90/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={linkedin} alt="linkedin"></img>
        </a>
        <a
          href="mailto:marcelo.sobrinho@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={mail} alt="email"></img>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5581998066509"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={whatsapp} alt="whatsapp"></img>
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100025656512992"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={facebook} alt="facebookP"></img>
        </a>
      </div>
      <p className="footer-title">Desenvolvido por Marcelo Gomes © - 2022</p>
    </footer>
  );
}

export default Footer;
