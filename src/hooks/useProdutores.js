import { useState, useEffect } from "react";
import { carregarProdutores } from "../services/carregarDados";

export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregarProdutores();
        setTitulo( retorno.titulo )
        setLista( retorno.lista)
        console.log(retorno);
    }, []);

    return [titulo, lista];
}