import { dom } from "../dom/elements";
import { THEME } from "../controllers/objectTheme";

let i = 0;
function toggleActiveElements() {
  const currentTheme = THEME[i];

  i++;
  if (i >= 3) i = 0;

  const nextTheme = THEME[i];

  document.body.classList.remove(currentTheme.class);
  document.body.classList.add(nextTheme.class);

  if (dom.Choose) {
    dom.Choose.classList.remove(currentTheme.id);
    dom.Choose.classList.add(nextTheme.id);
  }
}

function eventToggleTheme() {
  toggleActiveElements();
}

if (dom.BoxChoose instanceof HTMLButtonElement)
  dom.BoxChoose?.addEventListener("pointerdown", eventToggleTheme);
