import Image from 'next/image';

export default function Card(props) {
  return (
    <div className="card">
      <Image
        width={500}
        height={500}
        src={props.imagemCobra}
        alt={props.nomeCobra}
      />
      <div className="card-text">{props.nomeCobra}</div>
    </div>
  );
}
