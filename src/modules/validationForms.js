const validationForms = () => {
    const cyrillic = document.querySelectorAll('.feedback-block__form-input_name');

    const disableSymbols = (els, regExp) => {
        let replace = '';
        if (els instanceof HTMLInputElement) {
            els = [els];
        }
        if (regExp instanceof Array) {
            replace = regExp[1];
            regExp = regExp[0];
        }
        els.forEach(el => {
            el.addEventListener('input', () => el.value = el.value.replace(regExp, replace));
            el.addEventListener('blur', () => {
                el.value = el.value.replace(/^[ -]*|( |-)(?=\1)|[ -]*$/g, '');
                if (el.name === 'user_name') {
                    el.value = el.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, x => x.toUpperCase());
                }
            });
            if (el.type === 'email') {
                el.addEventListener('keypress', e => {
                    if (e.code === 'Space') {
                        e.preventDefault();
                    }
                });
            }
        });
    };
    disableSymbols(cyrillic, /[^А-Яа-яЁё ]/g);

};

export default validationForms;