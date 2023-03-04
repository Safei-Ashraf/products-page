export function ProductImage(imageUrl, title) {
    const productImage = document.createElement('img');
    productImage.setAttribute('src', imageUrl);
    productImage.setAttribute('alt', title);
    productImage.classList.add('product-image');
    return productImage;
}