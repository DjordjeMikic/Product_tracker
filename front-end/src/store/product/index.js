const initialState = {
    products: null,
    product: null,
    error: null,
    success: null
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }

        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload
            }

        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }

        case 'SET_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
            
        default:
            return state;
    }
}

export default reducer;