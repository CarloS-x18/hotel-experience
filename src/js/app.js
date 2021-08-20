// variables 
const btnMenu = document.querySelector('#btn-menu');
const menuView = document.querySelector('#links');
const nav = document.querySelector('#navegacion');
const links = document.querySelectorAll('.link__section');
const linksContainer = document.querySelector('.nav__links');

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', navScroll);
})

// menu event toggle to navbar
btnMenu.addEventListener('click', () => {
    menuView.classList.toggle('view-menu');
    btnMenu.classList.toggle('button-rotate');
});

function navScroll() {
    if(window.scrollY > 5) {
        nav.classList.add('bg-white');
    } else {
        nav.classList.remove('bg-white');
    }
}

// scroll in page section view
links.forEach(link => {
    link.addEventListener('click', e => {

        e.preventDefault();

        // variables
        const sectionLink = e.currentTarget.getAttribute("href").slice(1);
        const sectionPage = document.querySelector(`#${sectionLink}`);
        const navHeight = nav.getBoundingClientRect().height;

        const linksHeight = linksContainer.getBoundingClientRect().height;
        const navFixed = linksContainer.classList.contains('view-menu');
        let position = sectionPage.offsetTop - navHeight;

        if(navFixed) {
            position += linksHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });

        menuView.classList.remove('view-menu');
        btnMenu.classList.remove('button-rotate');
    });
});

