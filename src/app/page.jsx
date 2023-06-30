import "./css/home.css";

export default function Home() {
  return (
    <>
      <div className="div-home">
        <div className="div-title">
          <h1 id="main-title">VIDA DE SERPENTE</h1>
          <div className="title-border">
            <h2 id="sub-title">SERPENTES VIVAS = ECOSSISTEMA SAUDÁVEL</h2>
          </div>
        </div>
        <div className="div-options">
          <div className="bio">
            <a href="bio-diversidade">
              <p className="bio-title">BIODIVERSIDADE BRASILEIRA</p>
            </a>
          </div>
          <div className="deseq">
            <a href="/desequilibrio-ambiental" className="deseq-title">
              DESEQUILÍBRIO AMBIENTAL
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
