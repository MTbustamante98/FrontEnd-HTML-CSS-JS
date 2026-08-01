import { dom } from "../dom/elements";

export type EventCallback = (e: Event) => void;

export default function createListeners() {
  return (renderNumber: EventCallback, modifyCalc: EventCallback) => [
    { element: dom.ValueNumberButtons, event: "click", callback: renderNumber },
    { element: dom.ValueOperators, event: "click", callback: modifyCalc },
    { element: dom.ButtonModifiers, event: "click", callback: modifyCalc },
  ];
}
