const illustrationDownloadReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TO_DOWNLOAD": {
            return [action.payload];
        }
        default: {
            return state;
        }
    }
}

export default illustrationDownloadReducer;