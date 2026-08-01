import { renderNumber } from "./renderNumberAndModifyCalc";
import { modifyCalc } from "./renderNumberAndModifyCalc";
import createListeners from "../utils/createListeners";

export default function startCalculation() {
  const getlisteners = createListeners();
  const listeners = getlisteners(renderNumber, modifyCalc);
  listeners.forEach(({ element, event, callback }) => {
    element.forEach((el) => {
      el.addEventListener(event, callback);
    });
  });
}
startCalculation();
