import { createCard } from "../../index.js";
export function Modal(id, state) {
    const productToDisplay = state.filter(product => product.id === id)[0];
    const modalContainer = document.querySelector('.modal-product-container');
    const productCard = createCard(productToDisplay, modalContainer);
    modalContainer.innerHTML = '';
    modalContainer.append(productCard);
    console.log('modal run')
}
