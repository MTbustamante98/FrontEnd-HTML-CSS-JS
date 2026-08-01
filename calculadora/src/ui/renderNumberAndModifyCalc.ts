import { dom } from "../dom/elements";
import { state } from "../controllers/objectStates";
import clearText from "../utils/clearText";
import addDigitCalculate from "../utils/addDigitCalculate";
import checkPonctuation from "../utils/checkPonctuation";
import { calculate } from "../operations/calculateOperators";

export function modifyCalc(e: Event) {
  const target = e.target as HTMLButtonElement | null;

  if (!target) return;

  state.op = target?.innerText;

  if (!dom.DisplayDigit || !dom.DisplayOperation) return;

  if (["+", "-", "/", "x"].includes(state.op)) {
    state.operator = state.op;

    if (dom.DisplayDigit.innerText) {
      state.firstValue = parseFloat(dom.DisplayDigit.innerText);
      dom.DisplayOperation.innerText = `${state.firstValue} ${state.operator}`;
      clearText(dom.DisplayDigit);
    } else if (dom.DisplayDigit.innerText === "") {
      if (state.firstValue !== null) {
        dom.DisplayOperation.innerText = `${state.firstValue} ${state.operator}`;
      } else {
        state.firstValue = 0;
        dom.DisplayOperation.innerText = `${state.firstValue} ${state.operator}`;
      }
    }
  }

  if (state.op === "=" && state.firstValue !== null && state.operator) {
    state.secondValue =
      dom.DisplayDigit.innerText === ""
        ? 0
        : parseFloat(dom.DisplayDigit.innerText);

    const result = calculate(
      String(state.operator),
      Number(state.firstValue),
      Number(state.secondValue),
    );
    clearText(dom.DisplayDigit);
    addDigitCalculate(dom.DisplayDigit, String(result));
  }

  if (state.op === "RESET") {
    if (dom.DisplayDigit && dom.DisplayOperation) {
      clearText(dom.DisplayDigit);
      clearText(dom.DisplayOperation);
      state.firstValue = null;
      state.operator = null;
      state.secondValue = null;
    }
  }

  if (state.op === "DEL") {
    if (dom.DisplayDigit) {
      dom.DisplayDigit.innerText = dom.DisplayDigit.innerText.slice(0, -1);
      dom.DisplayOperation.innerText = dom.DisplayOperation.innerText.slice(
        0,
        -1,
      );
      state.firstValue = "";
      state.operator = "";
    }
  }
}

export function renderNumber(e: Event) {
  const currentTarget = e.currentTarget as HTMLButtonElement | null;

  if (!currentTarget || !dom.DisplayOperation || !dom.DisplayDigit) return;

  if (
    currentTarget.innerText === "," &&
    dom.DisplayDigit.innerText.includes(",")
  ) {
    if (
      checkPonctuation(
        currentTarget.innerText ?? null,
        ",",
        String(state.firstValue),
      )
    )
      return;
  } else {
    addDigitCalculate(dom.DisplayDigit, currentTarget.innerText);
  }

  if (state.operator) {
    dom.DisplayOperation.innerText =
      state.firstValue +
      " " +
      state.operator +
      " " +
      dom.DisplayDigit?.innerText;
  }
}
