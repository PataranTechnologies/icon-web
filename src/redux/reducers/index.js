import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import cartDisplayReducer from "./cartDisplayReducer";
import iconsReducer from "./iconsReducer";
import illustrationsReducer from "./illustrationsReducer";
import illustrationDownloadReducer from "./illustrationDownloadReducer";
import iconPreviewReducer from "./iconPreviewReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    cartDisplay: cartDisplayReducer,
    icons: iconsReducer,
    illustrations: illustrationsReducer,
    illustrationDownload: illustrationDownloadReducer,
    iconPreview: iconPreviewReducer
});

export default rootReducer;