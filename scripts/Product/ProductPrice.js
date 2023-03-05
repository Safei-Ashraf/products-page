import { ProductQuickView } from "./ProductQuickView.js";
import { state as data} from "../../index.js";

export function ProductInfo(price, id, state) {

    const productText = document.createElement('div');
    productText.classList.add('card-text');
    const priceTag = document.createElement('p');
    priceTag.classList.add('price');
    priceTag.textContent = price;

    const quickViewButton = ProductQuickView(id, data);
    productText.append(priceTag, quickViewButton)

    return productText;
}