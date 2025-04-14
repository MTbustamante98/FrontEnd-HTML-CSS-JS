document.addEventListener('DOMContentLoaded', function() {
  function accordionInit() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  
  function accordionClick(event) {
    accordionList.forEach((item) => {
    if (item !== this) {
      item.classList.remove('ativo');
      item.nextElementSibling.classList.remove('ativo');
    }
  });
  
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', accordionClick)
  });
 }
 accordionInit();
});

