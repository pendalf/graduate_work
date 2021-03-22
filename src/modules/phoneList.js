const phoneList = () => {
    const arrow = document.querySelector('.header-contacts__arrow');

    arrow.addEventListener('click', e => {
        e.target.closest('.header-contacts').classList.toggle('openned');
    });
};

export default phoneList;