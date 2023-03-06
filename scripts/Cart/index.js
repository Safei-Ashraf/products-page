import { updateCartCount } from "./updateCartCount.js";
import { MiniProductCard } from "../Product/MiniProductCard.js"

import {state} from "../../index.js"
const cartCount = document.querySelector('.items-count');
const cartContent = document.querySelector('.cart-content');
const cartButton = document.querySelector('.cart-button');
window.onclick = function (event) {
    if (event.target !== cartButton) {
        cartContent.classList.remove('show');
    }
}
updateCartCount(state, cartCount);
cartButton.addEventListener('click', () => {
    cartContent.classList.toggle('show');
    if (updateCartCount(state, cartCount) === 0) {
        cartContent.textContent = 'Add products to view cart';
    };
})

MiniProductCard(state, document.querySelector('.cart-content'))
