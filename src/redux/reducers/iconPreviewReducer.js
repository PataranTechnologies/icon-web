const iconPreviewReducer = (state=[], action) => {
    switch(action.type){
        case "PREVIEW": {
            return state=action.payload;
        }
        default: {
            return state;
        }
    }
}

export default iconPreviewReducer;