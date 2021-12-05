import { Link } from 'react-router-dom';
import { UnstyledInput } from "../common";
import { AddBtn, AddProductContainer } from "./style";

const AddProduct = ({ search, onChange }) => (
    <AddProductContainer className="flex">
        <UnstyledInput
            type="text"
            placeholder="Search Name, Price, Product, Key"
            value={search}
            onChange={onChange}
        />            
        <AddBtn className="flex">
            <Link className="flex" to="/dashboard/add">
                <p>+</p>
                <span>Add Product</span>
            </Link>
        </AddBtn>
    </AddProductContainer>
)

export default AddProduct;