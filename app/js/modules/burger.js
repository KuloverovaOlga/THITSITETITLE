const burger = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');

    function openBurger() {
        burger.classList.add('active');
        nav.classList.add('active');
    }

    function closeBurger() {
        burger.classList.remove('active');
        nav.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('active') ? closeBurger() : openBurger();
    });
    
    if (window.innerWidth < 800) {
        nav.style.top = `${header.offsetHeight}px`;
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 800) {
            nav.style.top = `${header.offsetHeight}px`;
        }
    });
};

export default burger;
