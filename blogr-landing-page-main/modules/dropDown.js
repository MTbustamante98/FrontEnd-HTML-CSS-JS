export default class dropDownMenu {
  constructor(dataList, dataDrop, activeClass = "active") {
    this.activeClass = activeClass;
    this.dataList = document.querySelectorAll(dataList);
    this.dataDrop = document.querySelectorAll(dataDrop);

    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown({ target }) {
    const activeDrop = target.closest("[data-list]");
    const insideDrop = target.closest("[data-drop]");

    if (activeDrop) {
      const data = activeDrop.getAttribute("data-toggle-drop");
      const drop = document.querySelector(`[data-drop=${data}]`);

      if (drop) {
        activeDrop.classList.toggle(this.activeClass);
        drop.classList.toggle(this.activeClass);
      }
    } else if (!insideDrop) {
      [...this.dataList, ...this.dataDrop].forEach((menu) =>
        menu.classList.remove(this.activeClass)
      );
    }
  }

  addDropEvent() {
    document.addEventListener("click", this.activeDropDown);
  }

  init() {
    if (this.dataList && this.dataDrop) {
      this.addDropEvent();
    }
    return this;
  }
}
