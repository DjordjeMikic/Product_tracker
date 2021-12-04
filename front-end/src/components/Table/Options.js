import { Link } from 'react-router-dom';
import { OptionsContainer } from './style';

const Options = ({ id }) => (
    <OptionsContainer>
        <Link to={`/dashboard/change/${id}`}>
            <img src="/icons/pen.svg" alt="" />
        </Link>

        <Link to={`/delete/${id}`}>
            <img src="/icons/trash.svg" alt="" />
        </Link>

        <Link to={`/dashboard/product/${id}`}>
            <img src="/icons/eye.svg" alt="" />
        </Link>
    </OptionsContainer>
)

export default Options;