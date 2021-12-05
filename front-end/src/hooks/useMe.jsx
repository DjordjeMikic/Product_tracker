import { useDispatch } from 'react-redux';
import { setError, setSuccess } from '../store/user/actions';

export const useMe = () => {
    const dispatch = useDispatch();

    const clearError = () => {
        dispatch(setError(null));
    }

    const clearSuccess = () => {
        dispatch(setSuccess(null));
    }

    const clearBoth = () => {
        dispatch(setError(null));
        dispatch(setSuccess(null));
    }

    return {
        clearError,
        clearSuccess,
        clearBoth
    }
}