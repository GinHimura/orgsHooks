import bananinha from '../assets/produtores/bananinha.png'
import grow from '../assets/produtores/grow.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import salad from '../assets/produtores/salad.png'

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Bananinha Enterprise",
            imagem: bananinha,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Banana Tagrine",
            imagem: grow,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Banana Farm",
            imagem: jennyJack,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Bananatree",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Bananinha Salad",
            imagem: salad,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
    ]
}

export default produtores;