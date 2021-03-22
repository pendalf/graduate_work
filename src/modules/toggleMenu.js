const toggleMenu = () => {
    // const menu = document.querySelector('.menu');
    const popupMenu = document.querySelector('.popup-dialog-menu');

    const actionMenu = () => {
        popupMenu.style.transform = 'translate3d(0, 0, 0)';
    };

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('menu__icon')) {
            actionMenu();
        }
        if (target.closest('.close-menu')) {
            popupMenu.style.transform = '';
        }
    });
};

export default toggleMenu;