import { dom } from "../dom/elements";
import { THEME } from "../controllers/objectTheme";

export default function loopItensNumberOfTheme(
  element: NodeListOf<HTMLSpanElement>,
): void {
  element.forEach((span, index) => {
    span.innerText = THEME[index].label;
  });
}

loopItensNumberOfTheme(dom.NumberOfTheme);
