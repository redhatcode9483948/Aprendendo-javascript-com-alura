

//mensagem na tela  
alert('Boas vindas ao jogo do número secreto!');
//variavel que guarda o número
let numeroSecreto = 5;
let chute = prompt ('Escolha um número de 0 até 10:');
//enquanto chute não for igual ao número secreto
//A estrutura de repetição while é usada para repetir um bloco de código 
//enquanto uma condição for verdadeira 
//CUIDADO: Aqui pode gerar um loop infinito se o chute nunca for igual ao número secreto
//então o ideal é usar o while quando sabemos que a condição vai mudar em algum momento
//dentro do bloco de código
//Uma boa prática é usar o while quando temos certeza que a condição vai ser alterada
//e colocar os "if" e "else " dentro do while para evitar loops infinitos
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número de 0 até 10:');
    //condição para as variaveis
    if (chute == numeroSecreto) {
          alert(`Parabéns! Você acertou encheio, o número secreto é ${numeroSecreto}`);
          console.log('resultado da comparação', chute == numeroSecreto);
    }else{
      if(chute > numeroSecreto){
         alert(`O número secreto é menor do que ${chute}`)
     }else{
         alert(`O número secreto é maior do que ${chute}`)
   }
}
   }

