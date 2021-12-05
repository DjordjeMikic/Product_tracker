import axios from '../axiosConf';

export const setProducts = (a) => ({
    type: 'GET_PRODUCTS',
    payload: a
});

export const setProduct = (a) => ({
    type: 'GET_PRODUCT',
    payload: a
});

export const setError = (a) => ({
    type: 'SET_ERROR',
    payload: a
});

export const setSuccess = (a) => ({
    type: 'SET_SUCCESS',
    payload: a
})

export const getProducts = () => async (dispatch) => {
    try {
        let res = await axios({
            method: 'get',
            url: '/products'
        });
    
        if(res.status === 200) {
            dispatch(setProducts(res.data));
        }
    } catch(e) {
        throw new Error(e);
    }
}

export const getProduct = (a) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'get',
            url: `/products/${a}`        
        });
        if(res.status === 200) {
            dispatch(setProduct(res.data));
        }
    } catch(e) {
        throw new Error(e);
    }
}

export const updateProduct = (a, b) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'put',
            url: `/products/edit/${a}`,
            data: b
        });
        if(res.status === 201) {
            dispatch(setSuccess(true));
            dispatch(getProducts());
        }
    } catch(e) {
        dispatch(setError(e.response.data));
    }
}