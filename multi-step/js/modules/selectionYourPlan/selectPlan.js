import {
  cards,
  typePlan,
  spanPricePlan,
  chooseMonthly,
  chooseYearly,
  divChoose,
  choose,
} from "./elementsSelectPlan.js";
import { active } from "../utilitariansElements.js";

function selectCardPlan(e) {
  console.log(e);
}

function toggleTime() {
  choose.classList.toggle(active);

  chooseMonthly.classList.toggle("addColor", choose.classList.contains(active));
  chooseYearly.classList.toggle("cor-p1", choose.classList.contains(active));

  const spanFree = document.querySelectorAll(".span-free");
  spanFree.forEach((span) => span.classList.remove(active));
  if (choose.classList.contains(active)) {
    spanFree.forEach((span) => span.classList.add(active));
  }
}

const selectPlanStep = () => {
  cards.forEach((card) => card.addEventListener("click", selectCardPlan));
  divChoose.addEventListener("click", toggleTime);
};

export default selectPlanStep;
