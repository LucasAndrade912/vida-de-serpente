"use client"
import { useState } from "react";

export default function FormularioContato() {
    const [email, setemail] = useState()
    function enviarFormulario(){if (!validarEmail(email)) alert('Email inválido')}
    function validarEmail(email) {
        const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+[^.]$/;
        const regexPonto = /\.\./;
        return expressaoRegular.test(email) && !regexPonto.test(email);
      }
    
    
    
    function validarTelefone(telefone) {
        const regex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
        return regex.test(telefone);
      }
    
    return (
    <form onSubmit={enviarFormulario} className="formulario" method="post" action="#">
            <input type="text" placeholder="Qual o seu nome? :)" required="" />
            <input onChange={e => setemail(e.target.value)} type="email" placeholder="Seu e-mail" required="" />
            <textarea
            name="mensagem"
            type="text"
            placeholder="Escreva aqui sua mensagem."
            required=""
            defaultValue={""}
            />     
            <div className="btn">
                <input type="submit" defaultValue="Enviar" className="btn-submit" />
            </div>   
    </form>
    
    ); 
};