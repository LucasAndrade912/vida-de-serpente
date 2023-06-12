import { Card } from '../components/Card';

import '../css/bio-diversidade.css';
import snakes from '../serpentes.json';

export default async function Page() {
  // const response = await fetch('../serpentes.json');
  // const snakes = await response.json();

  return (
    <main>
      <div className="main-bio">
        <h1 id="bio-title">BIODIVERSIDADE BRASILEIRA</h1>

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
      </div>

      <div id="snakes">
        {snakes.map((snake) => {
          return <Card nomeCobra={snake.nome} imagemCobra={snake.imagem} />;
        })}
      </div>
    </main>
  );
}
