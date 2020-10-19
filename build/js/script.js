import { default as menu } from './modules/menu.js';
import { default as video } from './modules/video.js';
menu();

if (document.querySelector('.video') == true) {
    video();
}

let submenuToggles = document.querySelectorAll('.main-nav__submenu-toggle');
let mainLink = document.querySelectorAll('.main-nav__item-link');
let mainNavList = document.querySelector('.main-nav__list');
let level_menu1 = document.querySelectorAll('.level-1');
let level_menu2 = document.querySelectorAll('.level-2');
let submenu = document.querySelectorAll('.main-nav__item--has-submenu');

submenuToggles.onclick = function () {
    submenu.querySelector('.main-nav__submenu-toggle + .level-1').classList.add('active')
}
