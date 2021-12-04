import jwt_decode from 'jwt-decode';
import axios from '../axiosConf';

export const setToken = (a) => ({
    type: 'LOGIN',
    payload: a
});

export const decodeToken = (a) => ({
    type: 'SET_USER_INFO',
    payload: jwt_decode(a)
})

export const checkIsLoggedIn = () => (dispatch) => {
    if(localStorage.getItem('bearer')) {

        const token = localStorage.getItem('bearer');
        dispatch(setToken(token));

        setTimeout(() => {
            dispatch(decodeToken(token));
        }, 400);
    }
}

export const login = (a) => async (dispatch) => {
    let res = await axios({
        method: 'post',
        url: `/users/login`,
        data: a
    });
    if(res.status === 201) {
        dispatch(setToken(res.data));
        dispatch(decodeToken(res.data));
        localStorage.setItem('bearer', res.data);
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('bearer');
    dispatch(setToken(null));
    dispatch({ type: 'SET_USER_INFO', payload: null });
}
// console.log(jwt_decode(res.data));