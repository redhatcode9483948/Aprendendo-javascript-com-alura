

//mensagem na tela  
alert('Boas vindas ao jogo do número secreto!');
//variavel que guarda o número
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt ('Escolha um número de 0 até 10:');
let tentativas = 1;

//enquanto chute não for igual ao número secreto
//A estrutura de repetição while é usada para repetir um bloco de código 
//enquanto uma condição for verdadeira 
//CUIDADO: Aqui pode gerar um loop infinito se o chute nunca for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número de 0 até 10:');
    //condição para as variaveis
    if (chute == numeroSecreto) {
          alert(`Parabéns, Você acertou encheio com apenas ${tentativas} tentativas! o número secreto é ${numeroSecreto}`);       
    }else{
      if(chute > numeroSecreto){
         alert(`O número secreto é menor do que ${chute}`)
     }else{
         alert(`O número secreto é maior do que ${chute}`)
   }
   //tentivas = tentativas + 1 - incrementar + 1 para a variavel
   tentativas++;
   alert(`você já fez ${tentativas} tentivas`);
}
   }


