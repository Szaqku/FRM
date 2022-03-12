import React, {useContext} from "react";
import {ThemeContext} from "../../index";
import styled from "styled-components";


const Main = styled.header`
    background-color: ${props => props.theme.colors.elements};
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    ${({theme}) => theme.globalLeftRightSpacing}
    -webkit-box-shadow: -3px -16px 20px 0px rgb(66 68 90);
    -moz-box-shadow: -3px -16px 20px 0px rgb(66 68 90);
    box-shadow: -3px -16px 20px 0px rgb(66 68 90);
    margin-bottom: 50px;
    
`

const Title = styled.div`
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    
    @media (min-width: 520px) {
        font-size: 24px;
    }
`

const ChangeThemeButton = styled.button`
    border: none;
    padding: 1.2rem 0 1.2rem;
    margin-right: 0.19rem;
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    font-size: 12px;
    background-color: inherit;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    
    @media (min-width: 520px) {
        font-size: 14px;
    }
`

const Icon = styled.span`

`
const ChangeThemeButtonText = styled.span`
    padding-left: 1rem;
`

interface Props {

}

export const NavBar = (props: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <Main>
            <Title> Where in the world? </Title>
            <ChangeThemeButton onClick={ () => theme?.changeTheme() }>
                <Icon>{ theme?.icon }</Icon>
                <ChangeThemeButtonText>{ theme?.text }</ChangeThemeButtonText>
            </ChangeThemeButton>
        </Main>
    );
}
