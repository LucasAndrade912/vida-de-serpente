import { changeBackgroundLoop } from './background-transition';
import { showSnakes } from './show-snakes';

const pathsScripts = {
  '/': changeBackgroundLoop,
  '/index.html': changeBackgroundLoop,
  '/bio-diversidade.html': showSnakes
};

async function main() {
  const pathname = window.location.pathname;
  pathsScripts[pathname]();
}

main();
