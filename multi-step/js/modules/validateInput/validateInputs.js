import { progressStep } from "../stepAdvance/advanceStep.js";
import { inputs } from "./elementsInput.js";

const createValidationValues = () => {
  return () => {
    inputs.forEach((input) => input.classList.remove("active"));

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("active");

        const errorMsg = document.querySelector(
          `.error-message[data-input="${input.id}"]`
        );

        if (errorMsg) errorMsg.style.display = "block";
      }
    });

    if (!isValid) return false;

    progressStep();
    return true;
  };
};

export default createValidationValues;
