// variables 
const btnMenu = document.querySelector('#btn-menu');
const menuView = document.querySelector('#links');

// menu event toggle to navbar
btnMenu.addEventListener('click', () => {
    menuView.classList.toggle('view-menu');
    btnMenu.classList.toggle('button-rotate');
});