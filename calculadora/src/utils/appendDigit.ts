export default function appendDigit(
  digitEl: HTMLElement | null,
  value: string | null,
) {
  if (!digitEl) return;

  digitEl.innerText += value;
}
