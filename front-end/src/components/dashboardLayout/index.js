import React from "react";
import { LayoutContainer, MainContent } from "./style";
import SideBar from "../sideBar";
import HeaderBar from "./header";

const DashboardLayout = ({ children }) => (
    <LayoutContainer className="flex">
        <SideBar />
        <MainContent className="flex column">
            <HeaderBar />
            {children}
        </MainContent>
    </LayoutContainer>
)

export default DashboardLayout;