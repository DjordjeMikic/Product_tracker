import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { black, darkGrey, red, shine } from '../../globalStyles/colors';
import { Container } from '../StartLayout/style';
import { ModalContainer, ModalContent, Mark, Button, Img, Circle } from './style';
import { Close } from '../../svg';
import { E } from '../Status';
import axios from '../../store/axiosConf';
import { useTitle } from '../../hooks/useTitle';
import { setError } from '../../store/product/actions';
import { useAuth } from '../../hooks/useAuth';

const Modal = () => {
    const navigate = useNavigate();
    const { dynamic } = useTitle();
    const { login } = useAuth();
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();

    const remove = async () => {
        try {
            await axios({
                method: 'delete',
                url: `/products/${dynamic}`
            });
            navigate('/dashboard/products');
        } catch(e) {
            dispatch(setError(e));
        }
    }

    useEffect(() => {
        if(!login) {
            navigate('/');
        }
    }, [login, navigate]);

    return (
        <Container>            
            <ModalContainer></ModalContainer>
                {products.error && <E />}
                <ModalContent className="flex column">
                    <div className="flex" style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Circle><Img src="/icons/trash.svg" alt="trash" /></Circle>
                        <h2>Are you sure?</h2>
                        <div
                            onClick={() => navigate('/dashboard/products')}
                            className="flex relative"
                            style={{ height: '44px', width: '44px', justifyContent: 'flex-end' }}>
                            <Close fill={darkGrey} />                            
                        </div>
                    </div>
                    <p>Your this product data will be <Mark>deleted</Mark> and you will no longer be able to access them</p>
                    <div className="flex" style={{ width: '100%', justifyContent: 'flex-end', gap: '9px' }}>
                        <Button color={black} onClick={() => navigate('/dashboard/products')}>No</Button>
                        <Button bgColor={red} color={shine} onClick={remove}>Yes</Button>
                    </div>
                </ModalContent>
        </Container>
    )
}

export default Modal;