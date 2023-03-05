import { products } from "./scripts/productsData.js";
import { ProductButton } from "./scripts/Product/ProductButton.js"
import { ProductInfo } from "./scripts/Product/ProductPrice.js";
import { ProductTitle } from './scripts/Product/ProductTitle.js'
import { ProductImage } from "./scripts/Product/ProductImage.js";
import {  updateCartCount } from "./scripts/Cart/updateCartCount.js";

const container = document.querySelector('#root');
const state = products.slice();
const cartCount = document.querySelector('.items-count');
updateCartCount(state, cartCount);

function createCard({title, id, price, imageUrl, isAddedToCart }, parent)  {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.id = id;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const button = ProductButton(isAddedToCart);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        updateRender(state, id);
    })

    cardBody.append(ProductTitle(title), ProductInfo(price,id), button)
    card.append(ProductImage(imageUrl, title), cardBody )
    parent.appendChild(card)
}
function clearProducts() {
    container.innerHTML = '';
}
function render(data) {
    for (let i = 0; i < data.length; i++) {
        createCard(data[i], container)
    }
};
function updateRender(state, id) {
    const clickedProduct = state.filter(product => product.id === id)[0];
    const index = state.indexOf(clickedProduct);
    clickedProduct.isAddedToCart = !clickedProduct.isAddedToCart;
    state[index] = clickedProduct;
    clearProducts();
    render(state)
    updateCartCount(state, cartCount);
}


render(state);