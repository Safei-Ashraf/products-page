export function updateRender(elementToClear, state, id) {
    const clickedProduct = state.filter(product => product.id === id)[0];
    const index = state.indexOf(clickedProduct);
    clickedProduct.isAddedToCart = !clickedProduct.isAddedToCart;
    state[index] = clickedProduct;
    clear(elementToClear);
    render(state)
    cartCount.textContent = updateCount(state);
}
export function clear(elementToClear) {
    elementToClear.innerHTML = '';
}
export function render(data, container) {
    for (let i = 0; i < data.length; i++) {
        createCard(data[i], container)
    }
};
