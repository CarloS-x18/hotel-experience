// variables 
const btnMenu = document.querySelector('#btn-menu');
const menuView = document.querySelector('#links');

btnMenu.addEventListener('click', () => {
    menuView.classList.toggle('view-menu');
});