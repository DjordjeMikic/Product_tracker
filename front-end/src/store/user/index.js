const initialState = {
    token: null,
    userInfo: null,
    login: !true,
    error: null,
    success: null
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload
            }
        
        case 'SET_USER_INFO':
            return {
                ...state,
                userInfo: action.payload
            }
        
        case 'SET_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }

        case 'SET_USER_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.payload
            }
            
        default:
            return state;
    }
}

export default reducer;