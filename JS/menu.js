(function(){
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link-menu');
    const closeMenu = document.querySelector('.nav-close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-link-menu--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-link-menu--show');
    });

    


})();