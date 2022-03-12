import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import {useCurrentCountryInfo} from "../../hooks/CountryHooks";
import {InfoSection} from "./InfoSection";
import {BorderSection} from "./BorderSection";

interface Props {
}

const BackButton = styled(Link)`
    height: 40px;
    width: 135px;
    border: none;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.typography.detailPageFontSize};
    font-size: ${props => props.theme.typography.detailPageFontSize};
    -webkit-box-shadow: 0px 0px 7px 3px ${({theme}) => theme.colors.shadowColor};
    -moz-box-shadow: 0px 0px 7px 3px ${({theme}) => theme.colors.shadowColor};
    box-shadow: 0px 0px 7px 3px ${({theme}) => theme.colors.shadowColor};
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    
    & > span {
        padding-left: 14px;
    }
`
const OptionsBar = styled.nav`
    margin: 81px 0;
`

const CountryDetails = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(200px, 40%) auto;
    flex-flow: row wrap;
    justify-items: center;
    
    @media (min-width: 376px) {
        grid-template-rows: minmax(auto, 400px) 1fr;
    }
    
    @media (min-width: 1300px) {
        grid-template-columns: minmax(auto, 1fr) 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 60px;
        justify-items: inherit;
    }
    
    @media (min-width: 1440px) {
        grid-template-columns: 560px auto;
        grid-template-rows: 400px;
        grid-column-gap: 120px;
    }
`

const Info = styled.div`
    
    @media (min-width: 1300px) {
        margin: 30px;
    }
    
    @media (min-width: 1440px) {
        margin-left: 0;
    }
`

const BigFlag = styled.div.attrs(
    (props: { url: string }) => ({
        url: props.url
    })
)`
    height: auto;
    width: 100%;
    max-width: 560px;
    max-height: 400px;
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
`

export const Detail = styled.div`
    font-size: 16px;
    margin: 5px 0;
`
export const Label = styled.span`
    font-weight: ${({theme}) => theme.typography.fontWeight.bold}
`
export const Value = styled.span``

const Title = styled.h1`
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    font-size: 31px;
    margin-top: 40px;
`
const Main = styled.div`
    ${({theme}) => theme.globalLeftRightSpacing}
`
export const CountryPage = (props: Props) => {
    const { country, countries } = useCurrentCountryInfo();

    return (
        <Main>
            <OptionsBar>
                <BackButton to={"/"}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    <span> Back </span>
                </BackButton>
            </OptionsBar>
            <CountryDetails>
                <BigFlag url={country?.flags.png}/>
                <Info>
                    <Title> {country?.name} </Title>
                    <InfoSection country={country}/>
                    <BorderSection country={country} countries={countries}/>
                </Info>
            </CountryDetails>
        </Main>
    )
}
