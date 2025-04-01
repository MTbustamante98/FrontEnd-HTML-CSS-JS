class initMenuMobile {
  constructor(dropDownMenu, headerNav, imgBurguer, events) {
    this.dropDownMenu = document.querySelector(dropDownMenu);
    this.headerNav = document.querySelector(headerNav);
    this.imgBurguer = document.querySelector(imgBurguer);

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    const isActive = this.headerNav.classList.toggle(this.activeClass);

    if (this.imgBurguer) {
      const iconPath = isActive
        ? "./assets/images/icon-menu-close.svg"
        : "./assets/images/icon-menu.svg";
      this.imgBurguer.setAttribute("src", iconPath);
      this.imgBurguer.classList.toggle(this.activeClass);
    }
  }

  addDropDownMenuEvent() {
    try {
      if (this.dropDownMenu) {
        this.events.forEach((userEvent) => {
          this.dropDownMenu.addEventListener(
            userEvent,
            this.activeDropDownMenu
          );
        });
        console.log("Eventos Adicionados com sucesso");
      }
    } catch {
      console.error("Erro ao adicionar eventos:", error);
    }
  }

  init() {
    if (this.dropDownMenu && this.headerNav && this.imgBurguer) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}

const dropDownMenu = new initMenuMobile(
  '[data-menu="button"]',
  ".header nav",
  "#burguerImg"
);
dropDownMenu.init();
