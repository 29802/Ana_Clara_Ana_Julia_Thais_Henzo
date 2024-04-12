
let nav_menu = document.querySelector('.nav_menu');

document.querySelector('#menu-icon').onclick = () => {
    nav_menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    nav_menu.classList.remove('active');
    search.classList.remove('active');
}