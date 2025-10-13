export default class dropDownMenuBurguer {
  constructor(imgBurguer, buttons, nav, activeClass = "active") {
    this.imgBurguer = document.querySelector(imgBurguer);
    this.buttons = document.querySelector(buttons);
    this.nav = document.querySelector(nav);
    this.firstLi = document.querySelector(".li-active-dropdown:first-child");
    this.activeClass = activeClass;

    this.dropDownBurguer = this.dropDownBurguer.bind(this);
  }

  toggleElements(...elements) {
    elements.forEach((el) => {
      el.classList.toggle(this.activeClass);
    });
  }

  activeFirstList() {
    if (!this.firstLi) return;

    const firstLink = this.firstLi.querySelector("[data-list]");
    const firstDrop = this.firstLi.querySelector("[data-drop]");

    const isActive = this.nav.classList.contains(this.activeClass);

    firstLink?.classList.toggle(this.activeClass, isActive);
    firstDrop?.classList.toggle(this.activeClass, isActive);
  }

  changeImage() {
    const isActive = this.nav.classList.contains(this.activeClass);
    const iconPath = isActive
      ? "./images/icon-close.svg"
      : "./images/icon-hamburger.svg";

    this.imgBurguer.setAttribute("src", iconPath);
  }

  dropDownBurguer(e) {
    e.stopPropagation();

    this.toggleElements(this.nav, this.buttons);
    this.activeFirstList();
    this.changeImage();
  }

  addDropBurguerEvent() {
    this.imgBurguer.addEventListener("click", this.dropDownBurguer);
  }

  init() {
    if (this.imgBurguer) {
      this.addDropBurguerEvent();
    }
    return this;
  }
}
