import React from "react";
import { NavLink } from 'react-router-dom';
import { SmNavContainer, ImageContainer, Arrow, LinkContainer } from "./style";

const SmNav = ({ pathname, setAppended }) => (
    <SmNavContainer className="flex column">
        <ImageContainer className="flex" height="6vh" margin="144%">
            <Arrow className="flex" sm onClick={setAppended}>
                <p>&#x3e;</p>
            </Arrow>
        </ImageContainer>
        <LinkContainer className="flex" sm="44%">
            <NavLink to={pathname} exact className="flex" activeClassName="active">
                <img src="/icons/bag.svg" alt="Bag" />
            </NavLink>
        </LinkContainer>
        <LinkContainer className="flex" sm="44%">
            <NavLink to={`${pathname}profile`} className="flex" activeClassName="active">
                <img src="/icons/profile.svg" alt="" />
            </NavLink>
        </LinkContainer>
    </SmNavContainer>
)

export default SmNav;