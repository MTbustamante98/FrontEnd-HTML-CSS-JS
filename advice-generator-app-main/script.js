const bntGenerator = document.querySelector("[data-btn-generator]");
const spanId = document.querySelector("[data-advice-number]");
const adviceText = document.querySelector("[data-text-advice]");

const adviceGenerator = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((r) => r.json())
    .then((textAndId) => {
      adviceText.innerText = textAndId.slip.advice;
      spanId.innerText = textAndId.slip.id;
    })
    .catch((erro) => {
      adviceText.innerText = "Erro ao obter o conselho. Tente novamente.";
      console.error("Erro", erro.message);
    });
};

adviceGenerator();
bntGenerator.addEventListener("click", adviceGenerator);
