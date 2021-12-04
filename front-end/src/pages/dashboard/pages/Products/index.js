import React from 'react';
import AddProduct from '../../../../components/AddProduct';
import Table from '../../../../components/Table';
import { Container } from './style';

const ProductsPage = () =>  (
    <Container className="flex column">
        <AddProduct />
        <Table />
    </Container>
)

export default ProductsPage;