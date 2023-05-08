import img1 from '../images/01.png';
import img2 from '../images/02.png';
import img3 from '../images/03.png';

const backgrounds = [img1, img2, img3];
let backgroundNumber = 0;

export function changeBackgroundLoop() {
  setInterval(() => {
    document.body.style.backgroundImage = `url(${backgrounds[backgroundNumber]})`;
    backgroundNumber++;
    if (backgroundNumber === 3) {
      backgroundNumber = 0;
    }
  }, 6000);
}
