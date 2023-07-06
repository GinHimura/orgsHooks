import React, { useMemo, useReducer, useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

const distanciaEmMetros = ( distancia ) => {
    return `${ distancia }m`;
} 

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [ selecionavel, inverterSelecionavel ] = useReducer(
        (selecionavel) => !selecionavel, 
        false
    );

    const distanciaEmTexto = useMemo ( 
        () => distanciaEmMetros(distancia),
        [distancia] );

    return <TouchableOpacity style={ estilo.cartao } onPress={inverterSelecionavel} >
        <Image source={ imagem } accessibilityLabel="nome" style={ estilo.imagem }/>
        <View style={ estilo.header }>
            <View>
                <Text style={ estilo.nome }>{ nome }</Text>
                <Estrelas quantidade={ estrelas }
                        editavel={ selecionavel }
                        grande={ selecionavel}/>
            </View>
            <Text style={ estilo.distancia }>{ distanciaEmTexto }</Text>
        </View>
    </TouchableOpacity>
}

const estilo = StyleSheet.create({
    cartao: {
        backgroundColor: '#f6f6f6',
        flexDirection: "row",
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        
        //Android
        elevation: 4,

        //iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
});