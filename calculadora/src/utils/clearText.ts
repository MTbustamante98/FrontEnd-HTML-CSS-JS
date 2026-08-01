export default function clearText(element: HTMLElement | null) {
  if (!element) return;

  element.innerText = "";
}
