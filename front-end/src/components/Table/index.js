import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, setProducts } from "../../store/product/actions";
import { TableContainer } from "./style";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ search }) => {
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();

    const checkAll = (e) => {
        const newArr = products.products.map((a) => ({
            ...a,
            checked: e.target.checked
        }));
        dispatch(setProducts(newArr));
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <TableContainer>
            <TableHeader checkAll={e => checkAll(e)} />
            <TableBody search={search} products={products.products} />
        </TableContainer>
    )
}

export default Table;