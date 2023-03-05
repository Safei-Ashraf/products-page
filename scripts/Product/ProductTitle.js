export function ProductTitle(title){
    const productTitle = document.createElement('h5');
    productTitle.classList.add('card-title');
    productTitle.textContent = title;
    return productTitle;
}