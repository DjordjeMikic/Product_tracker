import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { capitalizeWords, stripSlashes } from '../../../../helpers';
import { darkGrey, red, shine, success } from '../../../../globalStyles/colors';
import { getDate } from '../../../../helpers';
import { ProductContainer, ImageContainer, Row, DataContainer, Property, BtnBox, Desc } from './style';
import { Box, CheckMark, Close, Euro, Pen, Trash } from '../../../../svg';
import { getProduct } from '../../../../store/product/actions';

const ProductPage = () => {
    const [d, setD] = useState(getDate());

    const { product } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const { pathname } = useLocation();
    const header = capitalizeWords(stripSlashes(pathname));

    useEffect(() => {
        dispatch(getProduct(header[header.length - 1]));
    }, [dispatch, header]);

    useEffect(() => {
        if(product) {
            setD(getDate(new Date(product.added)));
        }
    }, [product])

    if(!product) {
        return <h1>Loading...</h1>
    }

    return (
        <ProductContainer className="flex column">
            
            <ImageContainer>
                <img src="/namestaj.jpg" alt="" />
            </ImageContainer>
            
            <Row className="flex">

                <div className="flex column" style={{ alignItems: 'flex-start' }}>
                    <h1>{product.productName}</h1>
                    <p>{product.productKey}</p>
                </div>

                <DataContainer className="flex">

                    <Property className="flex">
                        <Euro fill={darkGrey} />
                        <h4>{product.price}</h4>
                    </Property>

                    <Property className="flex">
                        <Box fill={darkGrey} />
                        <h4>{product.stock} pieces</h4>
                    </Property>

                    <Property className="flex">
                        {product.discount ? <CheckMark fill={success} /> : <Close fill={red} />}
                        <h4>Sale</h4>
                    </Property>

                    <Property className="flex">
                        <h4>{d.date}</h4>
                    </Property>

                    <Property className="flex">
                        <h4>{d.month}, {d.date}, {d.year}</h4>
                    </Property>

                    <div className="flex" style={{ gap: '6px' }}>
                        <Link to={`/dashboard/change/${product._id}`}>
                            <BtnBox className="flex" bgColor={shine}>
                                <Pen fill={darkGrey} />
                            </BtnBox>
                        </Link>
                        <Link to={`/delete/${product._id}`}>
                            <BtnBox className="flex" bgColor={red}>
                                <Trash fill={shine} />
                            </BtnBox>
                        </Link>
                    </div>

                </DataContainer>
            </Row>

            <Desc>
                {product.productDescription}
            </Desc>
        </ProductContainer>
    )
}

export default ProductPage;