const bntGenerator = document.querySelector("[data-btn-generator]");
const spanId = document.querySelector("[data-advice-number]");
const adviceText = document.querySelector("[data-text-advice]");

const fecthData = async () => {
  const fetchDados = await fetch("https://api.adviceslip.com/advice");
  if (!fetchDados.ok) throw new Error("Erro na resposta da API.");
  return fetchDados.json();
};

const adviceGenerator = async () => {
  try {
    adviceText.innerText = "Carregando dica...";
    const data = await fecthData();
    adviceText.innerText = data.slip.advice;
    spanId.innerText = data.slip.id;
  } catch (error) {
    adviceText.innerText = "Erro no fecth da API.";
    console.error("Erro no processamento da API", error.message);
  }
};

adviceGenerator();
bntGenerator.addEventListener("click", adviceGenerator);
