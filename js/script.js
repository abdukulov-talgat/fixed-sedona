(function () {

  initializePopups();
  initializeModals();


  function initializePopups() {
    const popups = document.querySelectorAll('.popup');
    const popupOpenClass = 'popup--open';

    popups.forEach(popup => {
      const btn = Array.from(popup.parentElement.children).find(el => el.tagName == 'BUTTON');
      btn.addEventListener('click', (evt) => {
        let isOpen = popup.classList.contains(popupOpenClass);
        popups.forEach(p => p.classList.remove(popupOpenClass));

        if (isOpen) {
          popup.classList.remove(popupOpenClass);
        } else {
          popup.classList.add(popupOpenClass);
        }
      });
    });
  }

  function initializeModals() {
    const modalOpenClass = 'modal--open';
    const modalSearch = document.querySelector('.modal-search');
    const searchBtn = document.querySelector('.search__button');

    if(!searchBtn) return;

    searchBtn.addEventListener('click', () => modalSearch.classList.add(modalOpenClass));
    initializeModalCloseButtons();

    function initializeModalCloseButtons() {
      const modals = document.querySelectorAll('.modal');

      if(!modals) return;

      modals.forEach(modal => {
        const close = modal.querySelector('.modal__close-button');
        close.addEventListener('click', () => modal.classList.remove(modalOpenClass));
      });
    }
  }
})();
