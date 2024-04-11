'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
          btn = document.querySelector('.header_hamburger');

    btn.addEventListener('click', e => {
        menu.classList.toggle('header_menu-active');
        btn.classList.toggle('header_hamburger-close');
    })
})