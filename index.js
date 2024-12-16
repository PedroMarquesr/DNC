var seta_direita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var seta_esquerda = window.document.getElementById("seta-esquerda")

function rolar_a_direita() {
  leonardo.style = "display:none"
  bruna.style = "display:flex"
  seta_esquerda.style = "display:flex; margin-top:55px"
  seta_direita.style = "display:none"
}

function rolar_a_esquerda() {
  leonardo.style = "display:flex"
  bruna.style = "display:none"
  seta_direita.style = "display:flex; margin-top:55px"
  seta_esquerda.style = "display:none"
}
