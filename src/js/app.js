// variables 
const btnMenu = document.querySelector('#btn-menu');
const menuView = document.querySelector('#links');
const nav = document.querySelector('#navegacion');

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', navScroll);
})

// menu event toggle to navbar
btnMenu.addEventListener('click', () => {
    menuView.classList.toggle('view-menu');
    btnMenu.classList.toggle('button-rotate');
});

function navScroll() {
    if(window.scrollY !== 0) {
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('bg-white');
    }
}