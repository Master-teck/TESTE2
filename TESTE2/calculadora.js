let display = document.getElementById('display');
let valorAtual = '';
let operacao = '';
let resultado = 0;

function calcular(botao) {
    if (botao === '=') {
        resultado = eval(valorAtual);
        display.value = resultado;
        valorAtual = '';
    } else if (botao === 'C') {
        limpar();
    } else if (botao === 'DEL') {
        backspace();
    } else if (botao === '+' || botao === '-' || botao === '*' || botao === '/') {
        operacao = botao;
        valorAtual += botao;
        display.value = valorAtual;
    } else if (botao === '%') {
        resultado = parseFloat(valorAtual) / 100;
        display.value = resultado;
        valorAtual = '';
    } else {
        valorAtual += botao;
        display.value = valorAtual;
    }
}

function limpar() {
    display.value = '';
    valorAtual = '';
    operacao = '';
    resultado = 0;
}

function backspace() {
    valorAtual = valorAtual.slice(0, -1);
    display.value = valorAtual;
}