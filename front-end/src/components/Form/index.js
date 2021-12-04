import React from "react";
import {
    FormContainer,
    ImageContainer,
    FormEl,
    MainForm,
    Secondary,
    FormFooter,
    FooterText,
} from "./style";

const Form = ({ children, bannerText, ...rest }) => (
    <FormContainer {...rest} className="flex column">
        <ImageContainer>
            <img src="/banner.svg" alt="Banner" />
        </ImageContainer>
        <FormEl>
            <h4>Welcome !</h4>
            <h1>{bannerText}</h1>
            <Secondary>Enter your personal data below</Secondary>
            <MainForm >
                {children}
            </MainForm>
            <FormFooter className="flex column">
                <p>@ 2021, Made with by <span style={{ fontWeight: 'bold' }}>BrankiStudio</span></p>
                <FooterText>App version 1.0.</FooterText>
            </FormFooter>
        </FormEl>
    </FormContainer>
)

export default Form;