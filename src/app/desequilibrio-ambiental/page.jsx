import Title from "../components/title";
import Container from "./components/container-info";
import "../css/desequilibrio.css";
import Footer from "../components/footer";

export default async function Desequilibrio() {
  return (
    <>
      <Title text="DESEQUILIBRIO AMBIENTAL" />
      <Container />
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Uiaf1PAhaec"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
