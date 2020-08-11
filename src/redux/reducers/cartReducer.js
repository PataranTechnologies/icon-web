const cartReducer = ( state = [], action ) => {
    switch(action.type){
        case "ADD": {
            return [...state, action.payload];
        }
        case "REMOVE": {
            const updatedState = state.filter(item => item.id !== action.payload);
            return updatedState;
        }
        case "EMPTY_CART": {
            return state = [];
        }
        default: {
            return state;
        }
    }
}

export default cartReducer;