function validaResposta() {
  var certo = 1748;
  var tentativas = 0;
  var resposta = parseInt(prompt("Sua Resposta"));

  if (certo == resposta) {
    alert("Voce acertou! Clique em OK para ir para a próxima fase");
    window.location.assign("../dustin3/index.html");
  } else {
    while (tentativas < 3) {
      alert("Tente novamente.");
      tentativas++;
      var resposta = parseInt(prompt("Sua Resposta"));
    }
    window.location.replace("../../gameover/index.html");
  }
}
