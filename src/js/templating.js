import menuItems from '../templates/menu-items.hbs';
import menu from '../menu.json';

const markup = menuItems(menu);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
