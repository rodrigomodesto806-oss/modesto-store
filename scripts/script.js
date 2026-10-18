
const botaoTema = document.getElementById("botao-tema");

// Carrega o tema salvo ou usa o tema claro
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "escuro") {
  document.body.classList.add("tema-escuro");
}

// Alterna o tema ao clicar no botão
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");

  const temaAtual = document.body.classList.contains("tema-escuro")
    ? "escuro"
    : "claro";

  localStorage.setItem("tema", temaAtual);
});