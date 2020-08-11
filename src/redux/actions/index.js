export const addToCart = (icon) => {
    return {
        type: "ADD",
        payload: icon
    }
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE",
        payload: id
    }
}

export const cartToggle = () => {
    return {
        type: "TOGGLE_DISPLAY",
    }
}

export const addIllustrationToDownload = (illustration) => {
    return {
        type: "ADD_TO_DOWNLOAD",
        payload: illustration
    }
}
