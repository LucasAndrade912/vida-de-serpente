import "./css/globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Vida de Serpente",
  description: "Projeto da disciplina de Ciência, Tecnologia e Meio Ambiente.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
