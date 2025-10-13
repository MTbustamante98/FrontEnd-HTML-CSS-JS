import dropDownMenu from "./modules/dropDown.js";
import dropDownMenuBurguer from "./modules/dropDownBurguer.js";

const dropDown = new dropDownMenu("[data-list]", "[data-drop]");
dropDown.init();

const dropDownBurguer = new dropDownMenuBurguer(
  ".img-burguer",
  ".buttons-login",
  ".nav"
);
dropDownBurguer.init();
