import actionTypes from "../utils/Utils";

export const initialState = {
    theme: false,
    isDrawerOpen: false,
};


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme,
            }
        case actionTypes.OPEN_DRAWER:
            return {
                ...state,
                isDrawerOpen: action.isDrawerOpen,
            }
        default:
            return state;
    }
}

export default reducer;