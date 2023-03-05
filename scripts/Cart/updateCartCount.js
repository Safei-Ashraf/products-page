export function updateCartCount(products, cartElem) {
    let count = 0;
    products.forEach(product => {
        if (product.isAddedToCart === true) {
            count += 1;
        }
    })
    cartElem.textContent = count;
    return count;
}