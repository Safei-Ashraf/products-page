export function MiniProductCard(state, cartContent) {
    let cartItems = state.filter(product => product.isAddedToCart === true);
    cartItems.forEach(
        (product) => {
            let item = document.createElement('li');
            item.classList.add('mini-product-card');
            let img = document.createElement('img');
            img.src = product.imageUrl;
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('mini-image-container');
            imgContainer.appendChild(img);
            const productInfo = document.createElement('div');
            productInfo.classList.add('mini-product-info');
            const productTitle = document.createElement('h5');
            productTitle.classList.add('mini-card-title');
            productTitle.textContent = product.title;
            const priceTag = document.createElement('div');
            priceTag.classList.add('mini-price-tag');
            priceTag.textContent = product.price;
            productInfo.append(productTitle, priceTag);
            item.append(imgContainer, productInfo)
            cartContent.appendChild(item);
}    );
}