//mensagem na tela  
alert('Boas-vindas ao jogo do número secreto!');
//variável que guarda o número
let numeroSecreto = 5;
let chute = prompt ('Escolha um número de 0 até 10:');

//condição para as variaveis
if (chute == numeroSecreto) {
alert(`Parabéns! Você acertou encheio, o número secreto é ${numeroSecreto}`);
console.log(numeroSecreto);
}else{
    alert('Você errou :(');
}
