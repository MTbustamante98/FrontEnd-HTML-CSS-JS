//Form
const formulario = document.querySelector(".form-box");
const inputEmail = document.getElementById("email");
const main = document.getElementById("container");

//Message Sucess
const boxSucessMessage = document.querySelector(".box-sucess-message");
const emailSent = document.getElementById("email-sent");
const buttonDismiss = document.getElementById("button-dismiss");

//Message Error
const messageError = document.getElementById("message-error");

function envioFormulario(event) {
  event.preventDefault();

  let formValid = true;

  messageError.innerText = "";
  inputEmail.style.border = "";
  inputEmail.style.backgroundColor = "";

  if (inputEmail.value === "" || !inputEmail.checkValidity()) {
    formValid = false;
    messageError.innerText = "Valid email required";
    inputEmail.style.border = "1px solid #e54";
    inputEmail.style.backgroundColor = "hsl(4, 100%, 95%)";
  } else {
    boxSucessMessage.classList.add("ativo");
    emailSent.innerText = inputEmail.value;
    main.style.visibility = "hidden";
  }
}

function dispensarMensagem() {
  boxSucessMessage.classList.remove("ativo");
  main.style.visibility = "visible";
}

buttonDismiss.addEventListener("click", dispensarMensagem);
formulario.addEventListener("submit", envioFormulario);
