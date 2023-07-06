import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {return <Text style={ estilo.titulo }>{ titulo }</Text> }

    return <>
            <Topo/>
            <FlatList data={ lista }
                            renderItem={({item}) => <Produtor {...item}/> }
                            keyExtractor={({nome}) => nome}
                            ListHeaderComponent={ TopoLista } />
    </>
}

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});