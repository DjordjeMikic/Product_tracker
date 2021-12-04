import image from '../assets/Image.png';
import { Container } from "./style";

const StartLayout = ({ children }) => (
    <Container className="flex">
        <img src={image} alt="" />
        {children}
    </Container>
)

export default StartLayout;