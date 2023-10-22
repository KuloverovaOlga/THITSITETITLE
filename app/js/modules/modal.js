const modal = (modalSelector, trigerSelector) => {
    const modal = document.querySelector(modalSelector);
    const modalOpenTrigers = document.querySelector(trigerSelector);

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

    const openModal = () => {
        let scrollWith = getScrollbarWidth();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollWith}px`;
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    modalOpenTrigers.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
    });

    modal.addEventListener('click', (e) => {
        let target = e.target

        if (target == modal || target.classList.contains('modal__close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
};

export default modal;
