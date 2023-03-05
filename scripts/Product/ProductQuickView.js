import { Modal } from "../Modal/Modal.js";

export function ProductQuickView(id) {
    const quickViewButton = document.createElement('button');
    quickViewButton.setAttribute('aria-labelledby', 'quick view button')
    quickViewButton.classList.add('quick-view');
    const quickViewImage = document.createElement('img');
    quickViewImage.setAttribute('src', '../assets/quick-view.svg');
    quickViewImage.setAttribute('role', 'presentation');
    quickViewButton.appendChild(quickViewImage);
    
    quickViewButton.addEventListener('click', () => {
        // console.log('product id', id);
        
        Modal(id);
        /*
        pass the id to Modal function
        Modal function find product with that ID and render it as modal content
        */ 
    })
    return quickViewButton;
}