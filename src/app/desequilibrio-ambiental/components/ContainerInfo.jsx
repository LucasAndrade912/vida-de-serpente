import "@/app/css/container-info.css";
import Image from "next/image";

export default async function ContainerInfo() {
  const snakeId = Math.floor(Math.random() * 3 + 1)
  console.log(snakeId)

  const response = await fetch(`https://64a31096b45881cc0ae6140f.mockapi.io/snakes/${snakeId}`)
  const data = await response.json()

  return (
    <div className="container">
      <div className="img">
        <Image
          width={400}
          height={400}
          src={data.snake_image}
          alt="serpente"
        />
      </div>
      <div className="text">
        <p className="title-deseq">
          Sem medo: qual a importância de preservar as serpentes no nosso
          ecossistema?
        </p>
        <div className="text-p">
          <p>
            Não é novidade que muitas pessoas têm medo de serpentes. Algumas
            chegam a ter verdadeiras fobias. Mas será que todo esse medo é
            realmente justificado?
          </p>
          <p>
            Na realidade, as serpentes são essenciais, assim como muitas
            espécies, para o equilibro ambiental. Isso porque, a falta de
            controle natural que as serpentes garantem, pode levar ao aumento de
            animais indesejados. Dessa forma, causando um desequilibrio
            ambiental gigantesco nos nossos ecossistemas.
          </p>
          <p>
            Esse desequlibrio pode causar danos terríveis aos humanos, tais como
            a proliferação de escorpiões e roedores. Sendo assim, aumentando a
            incidência de acidentes, além de ocasionar doenças graves e,
            consequentemente, trazendo o risco de morte para a população urbana.
          </p>
        </div>
      </div>
    </div>
  );
}
