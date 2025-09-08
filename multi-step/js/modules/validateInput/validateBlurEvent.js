import { inputs } from "./elementsInput.js";

const blurEventValidate = () => {
  inputs.forEach((input) =>
    input.addEventListener("blur", (e) => {
      if (e.target.value.trim() !== "") {
        e.target.classList.remove("active");

        const errorMsg = document.querySelector(
          `.error-message[data-input="${input.id}"]`
        );
        if (errorMsg) errorMsg.style.display = "none";
      }
    })
  );
};

export default blurEventValidate;
