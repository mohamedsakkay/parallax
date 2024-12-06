function toggleAccordion(header) {
    const allHeaders = document.querySelectorAll('.accordion-header');
    const allContents = document.querySelectorAll('.accordion-content');
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    // Check if the clicked item is already open
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Close all accordion items
    allContents.forEach((item) => {
        item.style.maxHeight = null;
    });
    allHeaders.forEach((item) => {
        item.querySelector('.accordion-icon').textContent = '+';
    });

    // If the clicked item is not open, open it
    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
    }
}





var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: 1,
    scale: 1.7,

    overflow: true,
});