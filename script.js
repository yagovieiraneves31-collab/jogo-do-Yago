const spawnar = document.getElementById("Spawnar")
const telaCriação = document.getElementById("Tela-de-criação-do-individuo")
const TelaJogo = document.getElementById("Tela-inicio-Jogo")

let nomeJogador = ""

spawnar.addEventListener("click", function() {

const inserçãoNome = document.getElementById("inserção-nome").value;
const genero = document.getElementById("Seleção-genero").value

nomeJogador = inserçãoNome || "Indivíduo"

const fotoPersonagem = document.getElementById("foto-personagem")

if (genero === "masculino") {
    fotoPersonagem.src = "foto/men.png"
} else {
    fotoPersonagem.src = "foto/girl.png"
}

document.getElementById("nome-exibindo").innerText = nomeJogador;
document.getElementById("genero-exibindo").innerText = genero;

telaCriação.style.display = "none";
TelaJogo.style.display = "block";
document.body.style.backgroundImage = "url('foto/fundo.png')";

})

const btnFicha = document.getElementById("btn-paradinha-rpg")
const btnFecharFicha = document.getElementById("btn-fechar-ficha")
const abaFicha = document.getElementById("aba-ficha")

const btnInventario = document.getElementById("btn-abrir-inventario")
const btnFecharInventario = document.getElementById("btn-fechar-inventario")
const abaInventario = document.getElementById("aba-inventario")

const caixaPrincipal = document.getElementById("caixa-principal")

btnFicha.addEventListener("click", function() {
    abaFicha.style.display = "block"
    caixaPrincipal.style.display = "none"
})

btnFecharFicha.addEventListener("click", function() {
    abaFicha.style.display = "none"
    caixaPrincipal.style.display = "flex"
})

btnInventario.addEventListener("click", function() {
    abaInventario.style.display = "block"
    caixaPrincipal.style.display = "none"
})

btnFecharInventario.addEventListener("click", function() {
    abaInventario.style.display = "none"
    caixaPrincipal.style.display = "flex"
})

const caixaDialogo = document.getElementById("caixa-dialogo")
const quemFala = document.getElementById("quem-fala")
const TextoHistoria = document.getElementById("texto-historia")
const listaInventario = document.getElementById("lista-de-inventario")
const opcoesEscolha = document.getElementById("opcoes-escolha")

const Levantar = document.getElementById("btn-Levantar")
const dormir = document.getElementById("btn-continuarDormindo")
const debater = document.getElementById("btn-Debater")

let falas = []
let falaAtual = 0

function iniciarDialogo(lista) {
    falas = lista
    falaAtual = 0
    opcoesEscolha.style.display = "none"
    quemFala.innerText = falas[0].autor
    DigitarTexto(falas[0].texto)
}

caixaDialogo.addEventListener("click", function() {
    if (falaAtual < falas.length - 1) {
        falaAtual++
        quemFala.innerText = falas[falaAtual].autor
        DigitarTexto(falas[falaAtual].texto)
    }
})

dormir.addEventListener("click", function() {
    iniciarDialogo([
        { autor: "narrador", texto: "Você olha pro relógio, finge demência sobre ter um emprego e vira pro lado pra voltar a mimir. Spoiler: não funciona. A adrenalina de faltar no trampo bate mais forte que café preto e você perde totalmente o sono. Parabéns, agora além de ir trabalhar, você vai ir atrasado. Sem saída, você levanta" },
        { autor: nomeJogador, texto: "nossa, que droga, nao consigo mas dormir, melhor levantar e comer alguma coisa" }
    ])
})

Levantar.addEventListener("click", function() {
    iniciarDialogo([
        { autor: "narrador", texto: "Você vence a gravidade da cama na força do ódio e fica de pé no quarto." },
        { autor: nomeJogador, texto: "Bora encarar mais um dia de CLT..." }
    ])
})

debater.addEventListener("click", function() {
    iniciarDialogo([
        { autor: "narrador", texto: "Você se debate na cama por vários minutos, cai no chão e acaba levantando de qualquer jeito." },
        { autor: nomeJogador, texto: "Ai minhas costas... pelo menos já tô de pé." }
    ])
})

let cronometro; 

function DigitarTexto(frase) {
    clearInterval(cronometro); 
    TextoHistoria.textContent = "";
    let posicao = 0;

    cronometro = setInterval(function() {
        TextoHistoria.textContent += frase.charAt(posicao);
        posicao++;

        if (posicao >= frase.length) {
            clearInterval(cronometro);
        }
    }, 30);
}
