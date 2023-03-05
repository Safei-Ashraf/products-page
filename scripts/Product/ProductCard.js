export function ProductCard(id) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.id = id;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    return [card, cardBody];
}