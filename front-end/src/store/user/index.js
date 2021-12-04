const initialState = {
    token: null,
    userInfo: null
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
            
        default:
            return state;
    }
}

export default reducer;