import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTitle } from '../../hooks/useTitle';
import { Header } from "./style";
import Menu from "./menu";
import { logout } from '../../store/user/actions';

const HeaderBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { path } = useTitle();

    return (
        <Header className="flex">
            <h1>{path}</h1>
            {userInfo && <p>{userInfo.fullName}</p>}
            <img
                src="/icons/profile.svg"
                alt=""
                height="44"
                width="44"
                onClick={() => setShowMenu(prevState => !prevState)}
            />
            {showMenu && (
                <Menu
                    logout={() => dispatch(logout())}
                />
            )}
        </Header>
    )
}

export default HeaderBar;