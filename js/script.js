(function () {

  initializePopups();

  function initializePopups(){
    const popups = document.querySelectorAll('.popup');
    const popupOpenClass = 'popup--open';

    popups.forEach(popup => {
      const btn = Array.from(popup.parentElement.children).find(el => el.tagName == 'BUTTON');
      btn.addEventListener('click', (evt) => {
        let isOpen = popup.classList.contains(popupOpenClass);
        popups.forEach(p => p.classList.remove(popupOpenClass));

        if (isOpen) {
          popup.classList.remove(popupOpenClass);
        }else {
          popup.classList.add(popupOpenClass);
        }});
    });
  }

  //TODO: Favorite add/remove

})();
