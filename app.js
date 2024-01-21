let listaDeNumeroSorteador = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function exibirMensagemInicial() {
  exibirTextoTela("h1", "Jogo do número secreto");
  exibirTextoTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
  if (chute == numeroSecreto) {
    exibirTextoTela("h1", "Você acertou!");
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    exibirTextoTela("h1", "Você errou, tente novamente!");
    if (chute > numeroSecreto) {
      exibirTextoTela("p", "O número secreto é menor");
    } else {
      exibirTextoTela("p", "O número secreto é maior");
      tentativas++;
      limparCampo();
    }
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let qtdElementosLista = listaDeNumeroSorteador.length;


  if(qtdElementosLista == numeroLimite ){
    listaDeNumeroSorteador = []
  }

  if(listaDeNumeroSorteador.includes(numeroEscolhido)){

    return gerarNumeroAleatorio();

}else{
  listaDeNumeroSorteador.push(numeroEscolhido);
  console.log(listaDeNumeroSorteador)
  return numeroEscolhido;


}
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();2
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}


