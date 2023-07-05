import "../css/contato.css";
import FormularioContato from "../components/FormularioContato";

export default function Contato() {
    return (
    <div className="contato-content">
        <div className="div-contato">
            <p className="tit-contato">
                Encontrou alguma serpente na sua região ou tem alguma dúvida?
            </p>
            <FormularioContato/>
        </div>
    </div>
  );
};