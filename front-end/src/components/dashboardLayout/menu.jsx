import { Line, MenuContainer } from "./style";

const Menu = ({ logout }) => (
    <MenuContainer className="flex column">
        <Line className="flex" onClick={logout}>Logout</Line>
    </MenuContainer>
)

export default Menu;