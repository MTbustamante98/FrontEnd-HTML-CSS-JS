class DOM {
  BoxChoose = document.querySelector<HTMLButtonElement>("[data-box-choose]");
  Choose = document.querySelector<HTMLDivElement>("[data-choose]");
  Display = document.querySelector<HTMLDivElement>("[data-display]");
  DisplayOperation = document.querySelector<HTMLSpanElement>(
    "[data-operation-display]",
  );
  DisplayDigit = document.querySelector<HTMLSpanElement>(
    "[data-digit-display]",
  );
  ButtonKeys = document.querySelectorAll(
    ".buttonKeysCalculator",
  ) as NodeListOf<HTMLButtonElement>;
  ButtonModifiers = document.querySelectorAll(
    "[data-btn-modifiers]",
  ) as NodeListOf<HTMLButtonElement>;
  NumberOfTheme = document.querySelectorAll(
    "[data-number-theme]",
  ) as NodeListOf<HTMLButtonElement>;
  ValueNumberButtons = document.querySelectorAll(
    "[data-value]",
  ) as NodeListOf<HTMLButtonElement>;
  ValueOperators = document.querySelectorAll("[data-operator]");
}

export const dom = new DOM();
