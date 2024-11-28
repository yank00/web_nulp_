const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

const openFormButton = document.getElementById('open-form-button');
const closeFormButton = document.getElementById('close-form-button');
const formPopup = document.getElementById('form-popup');

// Відкриття форми при натисканні на кнопку
openFormButton.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

// Закриття форми при натисканні на кнопку "Закрити"
closeFormButton.addEventListener('click', () => {
    formPopup.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const moreButton = document.querySelector(".more");
    const secondRow = document.querySelector(".categories_buttons.row-2");

    // При завантаженні сторінки другий рядок прихований
    secondRow.classList.add("hidden");

    moreButton.addEventListener("click", () => {
        // Перемикання класу
        secondRow.classList.toggle("hidden");
        // Зміна тексту кнопки
        moreButton.textContent = secondRow.classList.contains("hidden") ? "Більше" : "Менше";
    });
});


