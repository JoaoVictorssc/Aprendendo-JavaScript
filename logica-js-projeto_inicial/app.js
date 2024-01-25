alert('Boas-vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break
    } else{ 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }   
        tentativas++
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`isso aí! Você descobriu o número secreto ${numeroSecreto} com um total de  ${tentativas} ${palavraTentativa}.`);
