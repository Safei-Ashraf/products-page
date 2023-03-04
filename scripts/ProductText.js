export function ProductText(price) {

    const productText = document.createElement('div');
    productText.classList.add('card-text');
    const priceTag = document.createElement('p');
    priceTag.classList.add('price');
    priceTag.textContent = price;
    const quickViewButton = document.createElement('button');
    quickViewButton.setAttribute('aria-labelledby', 'quick view button')
    quickViewButton.classList.add('quick-view');
    const quickViewImage = document.createElement('img');
    quickViewImage.setAttribute('src', '../assets/quick-view.svg');
    quickViewImage.setAttribute('role', 'presentation');
    quickViewButton.appendChild(quickViewImage);
    productText.append(priceTag, quickViewButton)

    return productText;
}