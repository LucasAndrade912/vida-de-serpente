import "../css/header.css";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default async function header() {
  return (
    <div>
      <nav>
        <div class="contato">
          <a href="/contato">
            <FaEnvelope />
          </a>
          <a href="/contato">
            <p class="fale-conosco">Fale conosco!</p>
          </a>
          <div id="cont-linha"></div>
        </div>
        <ul class="main_menu">
          <li>
            <a class="menu" href="/">
              HOME
            </a>
          </li>
          <li>
            <a class="menu" href="https://api.whatsapp.com" target="_blank">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a class="menu" href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
