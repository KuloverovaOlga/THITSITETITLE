const accordeon = () => {
    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
    const accordionItemBodys = document.querySelectorAll('.accordion-item-body');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener('click', () => {
            const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active');
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle('active');
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }
            accordionItemHeader.classList.toggle('active');
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            accordionItemBodys.forEach((item) => {
                item.style.maxHeight = item.scrollHeight + 'px';
            });
        } else {
            accordionItemBodys.forEach((item) => {
                item.style.maxHeight = 0;
            });
            accordionItemHeaders.forEach((item) => {
                item.classList.remove('active');
            });
        }
    });
};

export default accordeon;
