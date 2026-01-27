let titulo = document.querySelector('h1');
titulo.innerHTML = 'O jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Você acertou o número secreto!';

function verificarChute() {


}
function mostrarNumero() { 
    const valor = document.getElementById("numero").value; 
    document.getElementById("resultado").textContent = "Você digitou: " + valor; 
}
