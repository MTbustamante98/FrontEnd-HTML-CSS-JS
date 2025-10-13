import { btnNext, btnPrev, steps } from "./elementsAdvance.js";
import createValidationValues from "../validateInput/validateInputs.js";
import { numberOfSteps } from "./elementsAdvance.js";
import { active } from "../utilitariansElements.js";

let currentStep = 0;
if (steps.length) numberOfSteps[0].classList.add(active);

function updateBackgroundAndColor() {
  const atual = steps[currentStep];
  numberOfSteps.forEach((el) => el.classList.remove(active));

  const id = atual.getAttribute("data-step");
  const stepNumber = document.querySelector(`[data-step=${id}]`);

  if (stepNumber) stepNumber.classList.add(active);
  if (id === "five") numberOfSteps[3].classList.add(active); 
}

function updateStep() {
  steps.forEach((el, index) => {
    el.style.display = index === currentStep ? "flex" : "none";
  });
}

function progressStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateStep();
    updateBackgroundAndColor();
  }
}

function prevSteps() {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
    updateBackgroundAndColor();
  }
}

const advanceStep = () => {
  const validationValues = createValidationValues();
  btnNext.forEach((btns) => btns.addEventListener("click", validationValues));
  btnPrev.forEach((btns) => btns.addEventListener("click", prevSteps));
};

export { progressStep };
export default advanceStep;
