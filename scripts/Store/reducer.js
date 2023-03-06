const productsReducer = (prevState, action) => {
    prevState =  {
        productsList:[],
        cartItems : []
    }
    const { id } = action.id;
    const productToUpdate = store.getState().productsList.find(product => product.id === id);
    const indexToUpdate = store.getState().productsList.findIndex(product => product.id === id);
    
    switch (action.type) {
        case 'ADD_CART':
       {     productToUpdate.isAddedToCart = true;
            const newState = { cartItems: {...cartItems, productToUpdate}, productsList: store.getState().productsList.splice(indexToUpdate, 1, productToUpdate) }
            
            return { ...newState };
       }

        case 'REMOVE_CART':
            {
                productToUpdate.isAddedToCart = false;
                const filteredCart = store.getState().cartItems.filter(item => item.id !== id);
            const newState ={cartItems: {...filteredCart}, productsList: store.getState().productsList.splice(indexToUpdate, 1, productToUpdate)}
                return {...newState};
        }

    }
}
