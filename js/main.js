import { changeBackgroundLoop } from "./background-transition";
import { getSnakes } from "./get-snakes";

const fallbackImage =
  'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível';

const pathsScripts = {
  "/": changeBackgroundLoop,
  "/index.html": changeBackgroundLoop,
  "/bio-diversidade.html": async () => {
    const snakes = await getSnakes();

    const snakesHTML = snakes.map((snake) => {
      const snakeImg = snake.imagem.length > 0 ? snake.imagem : fallbackImage
      return `
        <div class="snake">
          <img src="${snakeImg}" alt="${snake.nome}" />
          <h3>${snake.nome}</h3>
        </div>
      `;
    }).join('');

    document.querySelector("#snakes").innerHTML = snakesHTML;
  },
};

async function main() {
  const pathname = window.location.pathname;

  pathsScripts[pathname]();
}

main();
