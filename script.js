const spawnar = document.getElementById("Spawnar")
const telaCriação = document.getElementById("Tela-de-criação-do-individuo")
const TelaJogo = document.getElementById("Tela-inicio-Jogo")

spawnar.addEventListener("click", function() {

const inserçãoNome = document.getElementById("inserção-nome").value;
const genero = document.getElementById("Seleção-genero").value

document.getElementById("nome-exibindo").innerText = inserçãoNome;
document.getElementById("genero-exibindo").innerText = genero;

telaCriação.style.display = "none";
TelaJogo.style.display = "block";
document.body.style.backgroundImage = "url('foto/fundo.png')";







})

const TextoHistoria = document.getElementById("texto-historia")
const listaInventario = document.getElementById("lista-de-inventario")

const Levantar = document.getElementById("btn-Levantar")
const dormir = document.getElementById("btn-continuarDormindo")
const debater= document.getElementById("btn-Debater")

dormir.addEventListener("click", function() {

DigitarTexto("Você olha pro relógio, finge demência sobre ter um emprego e vira pro lado pra voltar a mimir. Spoiler: não funciona. A adrenalina de faltar no trampo bate mais forte que café preto e você perde totalmente o sono. Parabéns, agora além de ir trabalhar, você vai ir atrasado. Sem saída, você levanta")


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
