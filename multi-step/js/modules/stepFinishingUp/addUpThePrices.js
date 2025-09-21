import { sumValue } from "./elementsFinishingStep.js";
import { choose } from "../selectionYourPlan/elementsSelectPlan.js";
import { container } from "../pickAddOns/elementsAddOns.js";
import { active } from "../utilitariansElements.js";

const addPrices = () => {
  const prices = container.querySelectorAll(".span-add-on");
  const values = [...prices].map((span) => Number(span.dataset.value));
  const total = values.reduce((acc, current) => acc + current);
  sumValue.innerText = total;
};

export default addPrices;
