import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkIsLoggedIn } from '../store/user/actions';

export const useAuth = () => {
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkIsLoggedIn());
    }, [dispatch]);

    return {
        login: user.login
    };
}