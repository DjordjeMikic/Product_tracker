import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SideBarContainer, ImageContainer, Arrow, Desc, LinkContainer } from './style';
import SmNav from './SmNav';
import Card from './Card';

const SideBar = () => {
    const [appended, setAppended] = useState(true);
    const { pathname } = useLocation();

    if(!appended) {
        return (
            <SmNav
                pathname={pathname}
                setAppended={() => setAppended(true)}
            />
        )
    }
    
    return (
        <SideBarContainer className="flex column">
            <Link to="/dashboard/products">
                <ImageContainer className="flex">
                    <img src="/banner.svg" alt="Banner" />
                    <Arrow className="flex" sm={false} onClick={() => setAppended(!true)}>
                        <p>&#x3c;</p>
                    </Arrow>
                </ImageContainer>
            </Link>

            <Desc>Pages</Desc>

            <LinkContainer className="flex">
                <NavLink to="/dashboard/products"
                    className={`flex ${(navData) => navData.isActive ? 'active' : ''}`}
                >
                    <img src="/icons/bag.svg" alt="Bag" />
                    Products
                </NavLink>
            </LinkContainer>

            <LinkContainer className="flex">
                <NavLink to="/dashboard/profile"
                    className={`flex ${(navData) => navData.isActive ? 'active' : ''}`}
                >
                    <img src="/icons/profile.svg" alt="" />
                    Profile
                </NavLink>
            </LinkContainer>
            
            <Card />

        </SideBarContainer>
    )
}

export default SideBar;