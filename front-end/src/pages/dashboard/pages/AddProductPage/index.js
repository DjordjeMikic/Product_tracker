import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { Input, Tarea } from '../../../../components/common';
import { E, Success } from "../../../../components/Status";
import { AddContainer, Left, Right, Flex, Btn, FileDropContainer } from "./style";
import { FolderAdd } from "../../../../svg";
import DateCard from "./dateCard";
import { shine } from "../../../../globalStyles/colors";
import axios from '../../../../store/axiosConf';
import { setError, setSuccess } from "../../../../store/product/actions";

const AddProductPage = () => {
    const [info, setInfo] = useState({
        productName: '',
        productDescription: '',
        productKey: '',
        stock: '',
        price: '',
    });
    const [enabled, setEnabled] = useState(false);
    const [img, setImg] = useState(null);
    const formData = useRef(null);
    const { error, success } = useSelector(state => state.product);
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFile) => {
        formData.current.append('image', acceptedFile);
        setImg(URL.createObjectURL(new Blob(acceptedFile, {type: "image/jpeg/jpg/png"})));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

    useEffect(() => {
        formData.current = new FormData();
    }, []);

    const enableSwitch = () => {
        setEnabled(prevState => !prevState);
        console.log(enabled);
    };

    const onChange = (a) => {
        setInfo({
            ...info,
            [a.target.name]: a.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        formData.current.append('info', Object.entries(info));
        formData.current.append('discount', enabled);

        try {            
            let res = await axios({
                method: 'post',
                url: '/products/add',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData.current
            });
            if(res.status === 201) {                
                console.log('Success');
                dispatch(setSuccess(res.data));
            }
        } catch(e) {
            dispatch(setError(e));
        }
    }

    return (
        <AddContainer onSubmit={onSubmit} className="flex">
            {error && <E />}
            {success && <Success />}
            <Left className="flex column">
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
                <FileDropContainer className="flex column" active={isDragActive} { ...getRootProps() }>
                    <input {...getInputProps()} />
                    {img && <img src={img} alt="" />}
                    {isDragActive ? <p>Put image</p> : <h4>Upload product image</h4>}
                </FileDropContainer>
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
};

export default AddProductPage;