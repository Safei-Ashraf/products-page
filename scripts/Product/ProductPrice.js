import { ProductQuickView } from "./ProductQuickView.js";

export function ProductInfo(price, id) {

    const productText = document.createElement('div');
    productText.classList.add('card-text');
    const priceTag = document.createElement('p');
    priceTag.classList.add('price');
    priceTag.textContent = price;

    const quickViewButton = ProductQuickView(id);
    productText.append(priceTag, quickViewButton)

    return productText;
}