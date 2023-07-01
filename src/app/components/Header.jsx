import "../css/header.css";

import Link from "next/link";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default async function Header() {
  return (
    <header>
      <nav>
        <div class="contato">
          <Link href="/contato">
            <FaEnvelope />
          </Link>
          <Link href="/contato">
            <p class="fale-conosco">Fale conosco!</p>
          </Link>
          <div id="cont-linha"></div>
        </div>
        <ul class="main_menu">
          <li>
            <Link class="menu" href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link class="menu" href="https://api.whatsapp.com" target="_blank">
              <FaWhatsapp />
            </Link>
          </li>
          <li>
            <Link class="menu" href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
