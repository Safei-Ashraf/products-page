import { products } from "./scripts/productsData.js";
import {ProductButton} from "./scripts/ProductButton.js"

const container = document.querySelector('#root');

function createCard({name, id, price, imageUrl, isAddedToCart })  {

    const card = document.createElement('div');
    card.classList.add('product-card');
    card.id = id;
    const cardRedirect = document.createElement('a');
    cardRedirect.classList.add('product-redirect')
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', imageUrl);
    cardImage.setAttribute('role', 'presentation');
    cardImage.classList.add('product-image');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = name;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = price;
    const button = ProductButton(isAddedToCart);
    cardBody.append(cardTitle, cardText, button)
    cardRedirect.append( cardImage, cardBody )
    card.appendChild(cardRedirect);
    container.appendChild(card)
}
//Create Card:
createCard({
    name: "Careflection M10 in-Ear TWS Wireless Touch Bluetooth Earplugs",
    id: "product_1",
    price: "279.00",
    imageUrl:
        "https://m.media-amazon.com/images/I/71MgxH82r7L._AC_SL1500_.jpg",
    isAddedToCart: false,
});
for (let i = 0; i < products.length; i++)
{
    createCard(products[i])
}