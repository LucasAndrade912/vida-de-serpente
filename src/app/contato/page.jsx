import "../css/contato.css";
import FormularioContato from "../components/formulario";

export default function Contato() {
    return (
    <div className="contato-content">
    <div className="div-contato">
      <p className="tit-contato">
        Encontrou alguma serpente na sua região ou tem alguma dúvida?
      </p>
      <FormularioContato/>    
      
      <div className="btn">
        <input type="submit" defaultValue="Enviar" className="btn-submit" />
      </div>
    </div>
    </div>
  );
};