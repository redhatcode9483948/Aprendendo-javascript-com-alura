

//mensagem na tela  
alert('Boas-vindas ao jogo do número secreto!');
//variável que guarda o número
let numeroSecreto = 5;
let chute = prompt ('Escolha um número de 0 a 10:');

//condição para as variaveis
if (chute == numeroSecreto) {
alert(`Parabéns! Você acertou encheio, o número secreto é ${numeroSecreto}`);
console.log('resultado da comparação', chute == numeroSecreto);
    //condição que verifica se o número é maior ou menor que o "chute"
}else{
   if(chute > numeroSecreto){
    alert(`O número secreto é menor do que ${chute}`)
   }else{
    alert(`O número secreto é maior do que ${chute}`)
   }
}
