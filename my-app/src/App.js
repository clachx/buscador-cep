import React from "react";
import {useState} from 'react';
import { HiBuildingOffice2 } from "react-icons/hi2";
import './style.css';
 
import api from './services/api';

function App() {

const [input, setInput] = useState('')
const [cep, setCep] = useState({});

async function handleSearch(){
    if(input === ''){
        alert("Preencha com algum CEP.")
        return;
    }

    try{
        const response = await api.get(`${input}/json`);
        setCep(response.data)
        setInput("");

    }catch{
        alert("Ops! Deu ruim")
        setInput("")
    }

}

    return (
        <div className="container">
            <h1 className="title"> Buscador de CEP</h1>
        
        <div className="containerInput">
            <input type="text" 
            placeholder="Digite seu CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

        <button className="buttonSearch" onClick={handleSearch}>
            <HiBuildingOffice2 size={40} color="F23064"/>
        </button>
        </div>

        {Object.keys(cep).length > 0 && (
        <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>

        </main>
        )}

        </div>
    );
    }

    
export default App

//Parei no min 24:42 do vídeo https://www.youtube.com/watch?v=oy4cbqE1_qc&ab_channel=Sujeitoprogramador
