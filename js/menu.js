(() => {
    const refs = {
      openMenuBtn: document.querySelector('.menu-open-btn'),
      closeMenuBtn: document.querySelector('.menu-close-btn'),
      menu: document.querySelector('.backdrop'),
      body: document.querySelector('body')
    };
  
    
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menu.addEventListener('click', removeMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      !refs.menu.classList.contains('is-hidden') ? (refs.body.style.overflow="hidden") : (refs.body.style.removeProperty("overflow"))
    }
    function removeMenu(e) {
      if (e.target === refs.menu) {
        refs.menu.classList.add('is-hidden');
      }
    }
  })();