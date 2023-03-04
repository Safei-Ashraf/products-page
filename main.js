import { products } from "./scripts/productsData.js";
import { ProductButton } from "./scripts/ProductButton.js"
import { ProductText } from "./scripts/ProductText.js";
import { ProductTitle } from './scripts/ProductTitle.js'
import { ProductImage } from "./scripts/ProductImage.js";

const container = document.querySelector('#root');

function createCard({title, id, price, imageUrl, isAddedToCart }, parent)  {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.id = id;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    cardBody.append(ProductTitle(title), ProductText(price), ProductButton(isAddedToCart))
    card.append( ProductImage(imageUrl, title), cardBody )
    parent.appendChild(card)
}
//Create Card:

for (let i = 0; i < products.length; i++)
{
    createCard(products[i], container)
}