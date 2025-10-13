import { sumValue } from "./elementsFinishingStep.js";
import { container } from "../pickAddOns/elementsAddOns.js";

const addPrices = () => {
  const prices = container.querySelectorAll(".span-add-on");
  const values = [...prices].map((span) => Number(span.dataset.value));

  const planPriceSelected = document.querySelector(".plan-info.selected");
  let basePrice = 0;

  if (planPriceSelected) {
    const priceElement = planPriceSelected.querySelector("[data-price]");
    basePrice = Number(priceElement.dataset.price);

    const isYearly = document.querySelector(".choose").classList.contains("active");
    if (isYearly) basePrice *= 10;
  }

  const total = [...values, basePrice].reduce((acc, current) => acc + current);
  sumValue.innerText = total;
};

export default addPrices;
