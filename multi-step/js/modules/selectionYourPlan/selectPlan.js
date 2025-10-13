import {
  cards,
  spanPricePlan,
  chooseMonthly,
  chooseYearly,
  divChoose,
  choose,
} from "./elementsSelectPlan.js";
import {
  timeIndicator,
  timeIndicatorTotal,
  typePlanFinishingUp,
  pricePlan,
  sumValue,
} from "../stepFinishingUp/elementsFinishingStep.js";
import addPrices from "../stepFinishingUp/addUpThePrices.js";
import { active } from "../utilitariansElements.js";
let isYearly = false;

function extractPlanType(element) {
  const typePlan = element.querySelectorAll(".type-of-plan");
  const textMap = [...typePlan].map((textPlan) => textPlan.innerText).join("");

  typePlanFinishingUp.innerText = textMap;
}

function extractPricePlan(element) {
  const typePrice = element.querySelectorAll(".price-of-plan");
  const textPriceMap = [...typePrice].map((price) => price.innerText).join("");

  pricePlan.innerText = textPriceMap;
}

function selectCardPlan({ currentTarget }) {
  document
    .querySelectorAll(".plan-info")
    .forEach((el) => el.classList.remove("selected"));

  currentTarget.classList.add("selected");

  extractPlanType(currentTarget);
  extractPricePlan(currentTarget);
  
  addPrices();
}

function formatPrice() {
  spanPricePlan.forEach((span) => {
    const price = span.getAttribute("data-price");
    const priceFormat = Number(price * 10);
    if (isYearly) span.innerText = `$${priceFormat}/yr`;
    else span.innerText = `$${price}/mo`;
  });
}

function toggleTime() {
  choose.classList.toggle(active);
  isYearly = choose.classList.contains(active);

  chooseMonthly.classList.toggle("addColor", isYearly);
  chooseYearly.classList.toggle("cor-p1", isYearly);

  const spanFree = document.querySelectorAll(".span-free");
  spanFree.forEach((span) => span.classList.remove(active));

  if (choose.classList.contains(active))
    spanFree.forEach((span) => span.classList.add(active));

  formatPrice(choose.classList.contains(active));

  const textYearly = chooseYearly.innerText;
  [timeIndicator, timeIndicatorTotal].forEach(
    (time) => (time.innerText = isYearly ? `(${textYearly})` : "(Monthly)")
  );
}

const selectPlanStep = () => {
  cards.forEach((card) => card.addEventListener("click", selectCardPlan));
  divChoose.addEventListener("click", toggleTime);
};

export default selectPlanStep;
