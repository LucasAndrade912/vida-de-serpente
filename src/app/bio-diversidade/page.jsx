import { Card } from "./components/Card";
import Title from "../components/Title";

import "../css/bio-diversidade.css";
import snakes from "../serpentes.json";

export default async function Biodiversidade() {
  // const response = await fetch('../serpentes.json');
  // const snakes = await response.json();

  return (
    <main>
      <Title text="BIODIVERSIDADE BRASILEIRA" />

      <div id="filtros">
        <input
          type="search"
          id="busca-nome"
          placeholder="pesquise por espécie"
        />

        <div id="custom-select">
          <select id="regioes">
            <option value="regiao" hidden>
              região
            </option>
            <option value="norte">Norte</option>
            <option value="nordeste">Nordeste</option>
            <option value="centro-oeste">Centro Oeste</option>
            <option value="sul">Sul</option>
            <option value="sudeste">Sudeste</option>
          </select>
        </div>
      </div>

      <div id="snakes">
        {snakes.map((snake) => {
          return <Card nomeCobra={snake.nome} imagemCobra={snake.imagem} />;
        })}
      </div>
    </main>
  );
}