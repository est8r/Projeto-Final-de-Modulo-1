function validaResposta(resposta) {
  var resposta = prompt("Sua Resposta").toLowerCase();
  var certo = "a";
  if (resposta == certo) {
    alert("Voce GANHOU!");
    window.location.href = "../eleven4/index.html";
  } else {
    alert(
      "Eleven fica estática no lugar, aterrorizada e sem saber o que fazer enquanto ve o pobre menino se tornar vítima daquela criatura e logo depois, se tornar o próximo alvo"
    );
    window.location.replace("../../gameover/index.html");
  }
}
