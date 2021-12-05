import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTitle } from '../../hooks/useTitle';
import { Container } from './style';
import axios from '../../store/axiosConf';
import { setError, setSuccess } from '../../store/user/actions';
import { UserE, UserSuccess } from '../../components/Status';

const VerifyAccount = () => {
    const { dynamic } = useTitle();
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const sendToken = async () => {
            try {
                const res = await axios({
                    method: 'put',
                    url: `/users/verify/${dynamic.toLowerCase()}`
                });
                if(res.status === 201) {
                    dispatch(setSuccess('Account successfully verified, redirecting to login'));
                    setTimeout(() => navigate('/'), 6000);
                }
            } catch(e) {
                dispatch(setError(e));
            }
        }
        sendToken();
    }, [dispatch, dynamic, navigate]);

    return (
        <Container className="flex column">
            {user.error && <UserE />}
            {user.sucess && <UserSuccess status={user.success} />}
            <h1>Verifying you account</h1>
        </Container>
    )
}

export default VerifyAccount;