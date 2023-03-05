import { Modal } from "../Modal/Modal.js";
export function ProductQuickView(id, state) {
    const quickViewButton = document.createElement('button');
    quickViewButton.setAttribute('aria-labelledby', 'quick view button')
    quickViewButton.classList.add('quick-view');
    const quickViewImage = document.createElement('img');
    quickViewImage.setAttribute('src', '../assets/quick-view.svg');
    quickViewImage.setAttribute('role', 'presentation');
    quickViewButton.appendChild(quickViewImage);
    
    quickViewButton.addEventListener('click', () => { 
        Modal(id, state);
        const modal = document.querySelector('.modal');
        const overylay = document.querySelector('.modal-overlay');
        modal.style.display = 'block';
        overylay.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const closeModalButton = document.querySelector('.close-modal')
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
            overylay.style.display = 'none';
})
    })
    return quickViewButton;
}