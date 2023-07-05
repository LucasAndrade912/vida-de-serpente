import "../css/bio-diversidade.css";

import { supabase } from "../lib/supabase";
import Card from "./components/Card";
import Title from "../components/Title";

export default async function Biodiversidade() {
  const { data } = await supabase.from('Serpentes').select()

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
        {data.map((snake) => {
          return <Card nomeCobra={snake.nome} imagemCobra={snake.imagem} />;
        })}
      </div>
    </main>
  );
}