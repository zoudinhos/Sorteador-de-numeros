function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let resultado = document.getElementById('resultado');

    // Validação para evitar loop infinito
    if (quantidade > (ate - de + 1) || quantidade <= 0 || de >= ate) {
        resultado.innerHTML = `<label class="texto__paragrafo">Por favor, insira valores válidos.</label>`;
        return;
    }

    let sorteados = [];

    while (sorteados.length < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);
        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    
    ativarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ativarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
}

function desativarBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    
    desativarBotaoReiniciar();
}
