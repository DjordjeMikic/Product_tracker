import React from 'react';
import { lightRed, lightSuccess, red, success } from '../../globalStyles/colors';
import { DiscountContainer } from './style';

const Discount = ({ status }) => (
    <DiscountContainer
        className="flex"
        color={status ? success : red}
        bgColor={status ? lightSuccess : lightRed}
    >
        <p>{status ? 'Yes' : 'No'}</p>
    </DiscountContainer>
)

export default Discount;