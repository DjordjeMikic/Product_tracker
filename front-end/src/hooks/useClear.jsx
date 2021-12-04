import { useDispatch } from 'react-redux';
import { setError, setSuccess } from '../store/product/actions';

export const useClear = () => {
    const dispatch = useDispatch();

    const clearError = () => {
        dispatch(setError(null));
    }

    const clearSuccess = () => {
        dispatch(setSuccess(null));
    }

    return {
        clearError,
        clearSuccess
    }
}