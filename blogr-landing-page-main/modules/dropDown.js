export default class dropDownMenu {
  constructor(dataList, dataDrop, activeClass = "active", events) {
    this.activeClass = activeClass;
    this.dataList = document.querySelectorAll(dataList);
    this.dataDrop = document.querySelectorAll(dataDrop);

    if (events === undefined) this.events = ["keyup", "click"];
    else this.events = events;

    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown(e) {
    const { target } = e;
    const activeDrop = target.closest("[data-list]");
    const insideDrop = target.closest("[data-drop]");

    if (e.type === "keyup") {
      if (e.key !== "Enter" && e.key !== "") return;
      e.preveventDefault();
    }

    if (activeDrop) {
      const data = activeDrop.getAttribute("data-toggle-drop");
      const drop = document.querySelector(`[data-drop="${data}"]`);

      if (drop) {
        const willActive = !drop.classList.contains(this.activeClass);

        activeDrop.classList.toggle(this.activeClass, willActive);
        drop.classList.toggle(this.activeClass, willActive);

        drop.setAttribute("aria-expanded", String(willActive));
      }
    } else if (!insideDrop) {
      [...this.dataList, ...this.dataDrop].forEach((menu) =>
        menu.classList.remove(this.activeClass)
      );
    }
  }

  addDropEvent() {
    this.events.forEach((userEvent) => {
      document.addEventListener(userEvent, this.activeDropDown);
    });
  }

  init() {
    if (this.dataList && this.dataDrop) {
      this.addDropEvent();
    }
    return this;
  }
}
