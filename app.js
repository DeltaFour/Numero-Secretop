let listaDeNumeroSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroRandom();
let tentativas = 1; 

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
    
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou !!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
}else{
   if(chute > numeroSecreto){
    exibirTextoNaTela('p','O número secreto é menor que o chute')
   }else{
    exibirTextoNaTela('p','O número secreto é maior que o chute')
   }
   tentativas++;
   limparCampo();
}
}

function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroRandom()
    } else{
        listaDeNumeroSorteados.push(numeroEscolhido)
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroRandom();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

