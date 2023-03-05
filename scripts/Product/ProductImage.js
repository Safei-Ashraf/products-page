export function ProductImage(imageUrl, title) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const productImage = document.createElement('img');
    productImage.setAttribute('src', imageUrl);
    productImage.setAttribute('alt', title);
    productImage.classList.add('product-image');
    imageContainer.appendChild(productImage);
    return imageContainer;
}