import { changeBackgroundLoop } from "./background-transition";
import { getSnakes } from "./get-snakes";

async function main() {
  const pathname = window.location.pathname;

  if (pathname === "/") {
    changeBackgroundLoop();
  } else if (pathname === "/bio-diversidade.html") {
    const snakes = await getSnakes();
    console.log(snakes);
  }
}

main();
