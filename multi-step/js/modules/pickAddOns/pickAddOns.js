import { selectCheckbox, container } from "./elementsAddOns.js";
import { choose } from "../selectionYourPlan/elementsSelectPlan.js";
import { active } from "../utilitariansElements.js";
import addPrices from "../stepFinishingUp/addUpThePrices.js";

function createDynamicElements(text, priceValue, finalPrice) {
  const p = document.createElement("p");
  p.innerText = `${text}`;
  p.classList.add("paragraph-add-on");

  const span = document.createElement("span");
  span.innerText = `${priceValue}`;
  span.classList.add("span-add-on");
  span.dataset.value = finalPrice;

  const div = document.createElement("div");
  div.classList.add("wrapper-add-on");

  div.append(p, span);
  container.appendChild(div);

  return span;
}

function selectPickAddOn() {
  const checkedBox = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  container.innerHTML = "";

  checkedBox.forEach((box) => {
    const textLabel = document.querySelector(`label[for="${box.id}"]`);
    const firstText = textLabel.firstChild.textContent.trim();
    const price = parseFloat(
      textLabel.querySelector(".check-price").dataset.price
    );

    const isYearly = choose.classList.contains(active);

    const finalPrice = isYearly ? price * 10 : price;
    const period = isYearly ? "yr" : "mo";

    const priceDisplay = `+$${finalPrice}/${period}`;
    if (textLabel) createDynamicElements(firstText, priceDisplay, finalPrice);
  });
  addPrices();
}

const pickAddOns = () => {
  selectCheckbox.forEach((checkbox) =>
    checkbox.addEventListener("change", selectPickAddOn)
  );
};

export default pickAddOns;
