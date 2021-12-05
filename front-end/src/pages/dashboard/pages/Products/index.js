import { useState } from 'react';
import AddProduct from '../../../../components/AddProduct';
import Table from '../../../../components/Table';
import { Container } from './style';

const ProductsPage = () => {
    const [search, setSearch] = useState('');
    return (
        <Container className="flex column">
            <AddProduct search={search} onChange={e => setSearch(e.target.value)} />
            <Table search={search} />
        </Container>
    )
}

export default ProductsPage;