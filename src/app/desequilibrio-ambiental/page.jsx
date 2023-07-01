import "../css/desequilibrio.css";
import Title from "../components/title";
import Footer from "../components/footer";
import ContainerInfo from "./components/ContainerInfo";

export default async function Desequilibrio() {
  return (
    <>
      <Title text="DESEQUILIBRIO AMBIENTAL" />
      <ContainerInfo />
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
