import { createCard } from "../../index.js";
export function Modal(id, state) {
    const productToDisplay = state.filter(product => product.id === id)[0];
    const modalContainer = document.querySelector('.modal-product-container');
    const productCard = createCard(productToDisplay, modalContainer);
    modalContainer.innerHTML = '';
    modalContainer.append(productCard);
}
// Get the modal



// const modal = document.querySelector('.modal');
// const overylay = document.querySelector('.modal-overlay');
// modalbtn.addEventListener('click', () => {
//     modal.style.display = 'block';
//     overylay.style.display = 'block';
// })
