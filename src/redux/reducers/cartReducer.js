const cartReducer = ( state = [], action ) => {
    switch(action.type){
        case "ADD": {
            return [...state, action.payload];
        }
        case "REMOVE": {
            const updatedState = state.filter(item => item.id !== action.payload);
            return updatedState;
        }
        default: {
            return state;
        }
    }
}

export default cartReducer;