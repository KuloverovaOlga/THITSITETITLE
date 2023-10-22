const modalHelp = () => {
    const triger = document.querySelector('.header__help');
    const modal = document.querySelector('.header__help-content');

    triger.addEventListener('click', () => {
        modal.classList.toggle('active');
    });

    document.body.addEventListener('click', (e) => {
        if (modal.classList.contains('active') && e.target !== modal && e.target !== triger && !e.target.classList.contains('header__help-link')) {
            modal.classList.remove('active');
        }
    });
};
export default modalHelp;
