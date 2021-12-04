import { useState } from 'react';
import { useLocation } from "react-router";
import { useSelector } from 'react-redux';
import { Header } from "./style";
import { stripSlashes, capitalizeWords } from "../../helpers";
import Menu from "./menu";

const HeaderBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { userInfo } = useSelector(state => state.user);
    const { pathname } = useLocation();
    const header = capitalizeWords(stripSlashes(pathname));

    return (
        <Header className="flex">
            <h1>{header[header.length - 1].match(/[0-9]/g) ? 'Product' : header[header.length - 1]}</h1>
            {userInfo && <p>{userInfo.fullName}</p>}
            <img
                src="/icons/profile.svg"
                alt=""
                height="44"
                width="44"
                onClick={() => setShowMenu(prevState => !prevState)}
            />
            {showMenu && <Menu />}
        </Header>
    )
}

export default HeaderBar;