import "../css/header.css";

import Link from "next/link";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default async function Header() {
  return (
    <header>
      <nav>
        <div className="contato">
          <Link href="/contato">
            <FaEnvelope />
          </Link>
          <Link href="/contato">
            <p className="fale-conosco">Fale conosco!</p>
          </Link>
          <div id="cont-linha"></div>
        </div>
        <ul className="main_menu">
          <li>
            <Link className="menu" href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="menu" href="https://api.whatsapp.com" target="_blank">
              <FaWhatsapp />
            </Link>
          </li>
          <li>
            <Link className="menu" href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
