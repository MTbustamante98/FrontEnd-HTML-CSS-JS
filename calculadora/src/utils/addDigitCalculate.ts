import appendDigit from "./appendDigit";

export default function addDigitCalculate(
  display: HTMLElement | null,
  value: string | number | null | undefined,
) {
  if (!display || value === null || value === undefined) return;

  appendDigit(display, String(value));
}
