import { products } from "./scripts/productsData.js";
import { ProductCard } from "./scripts/Product/ProductCard.js"
import { MiniProductCard } from "./scripts/Product/MiniProductCard.js"
import { ProductButton } from "./scripts/Product/ProductButton.js"
import { ProductInfo } from "./scripts/Product/ProductPrice.js";
import { ProductTitle } from './scripts/Product/ProductTitle.js'
import { ProductImage } from "./scripts/Product/ProductImage.js";
import {  updateCartCount } from "./scripts/Cart/updateCartCount.js";

const container = document.querySelector('#root');
let state = products.slice();
if (JSON.parse(localStorage.getItem('products')) !== null) {
    
    state = JSON.parse(localStorage.getItem('products'));
}
const cartCount = document.querySelector('.items-count');
updateCartCount(state, cartCount);
const cartButton = document.querySelector('.cart-button');
const cartContent = document.querySelector('.cart-content');
cartButton.addEventListener('click', () => {
    cartContent.classList.toggle('show');
    if (updateCartCount(state, cartCount) === 0) {
        cartContent.textContent = 'Add products to view cart';
    };
})
window.onclick = function (event) {
    if (event.target !== cartButton) {
        cartContent.classList.remove('show');
    }
}

function createCard({title, id, price, imageUrl, isAddedToCart }, parent)  {
    const [card, cardBody] = ProductCard(id);
    const button = ProductButton(isAddedToCart);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        updateRender(state, id);
    })
    cardBody.append(ProductTitle(title), ProductInfo(price,id), button)
    card.append(ProductImage(imageUrl, title), cardBody )
    parent.appendChild(card)
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
    container.innerHTML = '';
    render(state)
    updateCartCount(state, cartCount);
    MiniProductCard(state,document.querySelector('.cart-content'))
    localStorage.setItem('products', JSON.stringify(state));
}

render(state);
MiniProductCard(state, document.querySelector('.cart-content'))






// Get the modal
const modalbtn = document.querySelector('.modal-button');
const  modal = document.querySelector('.modal');
modalbtn.addEventListener('click', () => {
    modal.style.display = 'block';
    console.log(modal)
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}