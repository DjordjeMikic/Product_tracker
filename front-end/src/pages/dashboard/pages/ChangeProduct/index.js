import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Tarea } from "../../../../components/common";
import { shine } from "../../../../globalStyles/colors";
import { AddContainer, Left, Right, Flex, Btn } from "../AddProductPage/style";
import { FolderAdd } from "../../../../svg";
import DateCard from "../AddProductPage/dateCard";
import { getProduct, updateProduct } from "../../../../store/product/actions";
import { E, Success } from "../../../../components/Status";
import { useTitle } from '../../../../hooks/useTitle';

const ChangeProduct = () => {
    const [info, setInfo] = useState({
        productName: '',
        productDescription: '',
        productKey: '',
        stock: '',
        price: '',
    });
    const [enabled, setEnabled] = useState(false);
    const { dynamic } = useTitle();
    const { product, error, success } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const getProductFromDb = useCallback(() => dispatch(getProduct(dynamic)), [dispatch, dynamic]);

    const enableSwitch = () => setEnabled(prevState => !prevState);

    const onChange = (a) => {
        setInfo({
            ...info,
            [a.target.name]: a.target.value
        });
    }

    const onSubmit = async (a) => {
        a.preventDefault();
        dispatch(updateProduct(product._id, { ...info, enabled }));
    }

    useEffect(() => {
        getProductFromDb();
    }, [getProductFromDb]);

    useEffect(() => {
        if(product) {
            const { productName, productDescription, productKey, stock, price, discount } = product;
            setInfo({
                productName,
                productDescription,
                productKey,
                stock,
                price
            });
            setEnabled(discount);
        }
    }, [product]);

    return (
        <AddContainer
            onSubmit={onSubmit}
            className="flex"
        >
            {error && <E />}
            {success && <Success />}
            <Left>
                <Input
                    info="Product name"
                    placeholder="Enter Product Name"
                    name="productName"
                    value={info.productName}
                    onChange={onChange}
                />
                <Tarea
                    info="Short Product Description"
                    placeholder="Product Description..."
                    rows="4"
                    name="productDescription"
                    value={info.productDescription}
                    onChange={onChange}
                />
            </Left>

            <Right>
                <DateCard enabled={enabled} onChange={enableSwitch} />
                <Input
                    info="Product key"
                    placeholder="1RRED94F45B99QTS"
                    name="productKey"
                    value={info.productKey}
                    onChange={onChange}
                />
                <Flex className="flex">
                    <Input
                        info="Stock"
                        name="stock"
                        value={info.stock}
                        onChange={onChange}
                    />
                    <Input
                        info="Price"
                        name="price"
                        value={info.price}
                        onChange={onChange}
                    />
                </Flex>

                <Btn className="flex">
                    <FolderAdd fill={shine} />
                    <p>Save</p>
                </Btn>
            </Right>
        </AddContainer>
    )
}

export default  ChangeProduct;