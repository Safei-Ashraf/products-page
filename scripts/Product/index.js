import { ProductButton } from "./ProductButton.js"
import { ProductInfo } from "./ProductPrice.js";
import { ProductTitle } from './ProductTitle.js'
import { ProductImage } from "./ProductImage.js";
import { Modal } from "../Modal/Modal.js";
import { ProductCard } from "./ProductCard.js"
import { state } from "../../index.js";
import { updateCartCount } from "../Cart/updateCartCount.js";
import { MiniProductCard } from "../Product/MiniProductCard.js"



export function createCard({ title, id, price, imageUrl, isAddedToCart }, parent) {
    const [card, cardBody] = ProductCard(id);
    const button = ProductButton(isAddedToCart);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        updateRender(state, id);
    })
    cardBody.append(ProductTitle(title), ProductInfo(price,id), button)
    card.append(ProductImage(imageUrl, title), cardBody )
    parent.appendChild(card)
    return card;
}
const container = document.querySelector('#root');

export function render(data) {
    for (let i = 0; i < data.length; i++) {
        createCard(data[i], container)
    }
};
const cartCount = document.querySelector('.items-count');

export function updateRender(state, id) {
    const clickedProduct = state.filter(product => product.id === id)[0];
    const index = state.indexOf(clickedProduct);
    clickedProduct.isAddedToCart = !clickedProduct.isAddedToCart;
    state[index] = clickedProduct;
    container.innerHTML = '';
    render(state)
    updateCartCount(state, cartCount);
    MiniProductCard(state, document.querySelector('.cart-content'))
    Modal(id, state)
    localStorage.setItem('products', JSON.stringify(state));
}