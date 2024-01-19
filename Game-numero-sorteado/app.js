alert('Boas vindas ao jogo do número secreto');
let dificuldade = prompt(('Digite o nível de dificuldade desejado: 1 - Fácil, 2 - Médio, 3 - Difícil'));

switch (dificuldade) {
    case '1':
        dificuldade = 10;
        break;
    case '2':
        dificuldade = 100;
        break;
    case '3':
        dificuldade = 1000;
        break;
    default:
        alert('Nível inválido');
        dificuldade = 10;
        break;
}

let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${dificuldade}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
alert('Fim de jogo!');

