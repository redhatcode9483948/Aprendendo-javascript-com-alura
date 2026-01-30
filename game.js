//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'O jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Você acertou o número secreto!';

//Evite declarar funções dentro de outras funções, a menos que seja necessário.

//Sempre declare funções antes de usá-las, especialmente se estiver usando let ou const para variáveis.



function  gerarNumeroAleatorio() {
  return  parseInt(Math.random() * 10)+1;
}

let numeroSecreto = gerarNumeroAleatorio();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!')
        exibirTextoNaTela ('p', 'você descobriu o número secreto!')

    } else {
       if (chute > numeroSecreto){
        exibirTextoNaTela ('p', 'O número secreto é menor');
       }else{
        exibirTextoNaTela ('p', 'O número secreto é maior');
       }
    }

}

//a finalidade da função abaixo é usar as variáveis acima para evitar repetição de código


function exibirTextoNaTela(tag, texto){    //declarando a função com dois parâmetros: tag e texto
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

//Aqui estammos dando valores aos parâmetro da função acima
exibirTextoNaTela('h1', 'O jogo do número secreto'); // todo lugar que tiver "tag" vai ser substituído pelo valor "h1"
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');// todo lugar que tiver "tag" vai ser substituído pelo valor "p"
