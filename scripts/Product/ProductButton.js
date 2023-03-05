export function ProductButton(isAddedToCart) {
    const productButton = document.createElement('button');

    if (isAddedToCart === false) {
        productButton.classList.add('add-cart');
        productButton.textContent = "Add to Cart";
    }
    else
    {
        productButton.classList.add('remove-cart');
        productButton.textContent = "Remove From Cart"; 
    }

    return productButton;
}