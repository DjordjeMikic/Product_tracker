import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { black, red, shine } from '../../globalStyles/colors';
import { Container } from '../StartLayout/style';
import { ModalContainer, ModalContent, Mark, Button, Img, Circle } from './style';
import axios from '../../store/axiosConf';
import { capitalizeWords, stripSlashes } from '../../helpers';

const Modal = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const header = capitalizeWords(stripSlashes(pathname));

    const remove = async () => {
        try {
            let res = await axios({
                method: 'delete',
                url: `/products/${header[header.length - 1]}`
            });
            if(res.status === 200) {
                navigate('/dashboard/products');
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Container>            
            <ModalContainer></ModalContainer>
                <ModalContent className="flex column">
                    <div className="flex" style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Circle><Img src="/icons/trash.svg" alt="trash" /></Circle>
                        <h2>Are you sure?</h2>
                        <div className="flex relative" style={{ height: '44px', width: '44px', justifyContent: 'flex-end' }}>
                            <Img src="/icons/close.svg" alt="close" style={{ opacity: '0.6' }} />
                        </div>
                    </div>
                    <p>Your data will be <Mark>deleted</Mark> and you will no longer be able to access them</p>
                    <div className="flex" style={{ width: '100%', justifyContent: 'flex-end', gap: '9px' }}>
                        <Button color={black} onClick={() => navigate('/dashboard/products')}>No</Button>
                        <Button bgColor={red} color={shine} onClick={remove}>Yes</Button>
                    </div>
                </ModalContent>
        </Container>
    )
}

export default Modal;