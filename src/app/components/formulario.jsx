export default function FormularioContato() {
    return (
    <form className="formulario" method="post" action="#">
            <input type="text" placeholder="Qual o seu nome? :)" required="" />
            <input type="email" placeholder="Seu e-mail" required="" />
            <textarea
            name="mensagem"
            type="text"
            placeholder="Escreva aqui sua mensagem."
            required=""
            defaultValue={""}
            />        
    </form>
    ); 
};