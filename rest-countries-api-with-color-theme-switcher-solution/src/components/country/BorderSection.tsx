import {Country} from "../../api/model/Country";
import React from "react";
import {Detail, Label, Value} from "./CountryPage";
import styled from "styled-components";
import {Link} from "react-router-dom";


interface Props {
    country?: Country,
    countries?: Country[]
}


const Main = styled.div`
    margin: 75px 0;
`

const BorderCountry = styled(Link)`
    padding: 4px 8px;
    margin: 5px;
    background-color: ${props => props.theme.colors.elements};
    -webkit-box-shadow: 0px 0px 7px 1px ${({theme}) => theme.colors.shadowColor};
    -moz-box-shadow: 0px 0px 7px 1px ${({theme}) => theme.colors.shadowColor};
    box-shadow: 0px 0px 7px 1px ${({theme}) => theme.colors.shadowColor};
    display: inline-block;
    text-decoration: none;
    color: ${({theme}) => theme.colors.text}
`

const codeToCountryName = (countries: Country[]) : (code: string) => Country | undefined => {
    return (code: string) => countries.find(country => country.alpha3Code === code);
}

const toComponent = (country?: Country) => {
    return (
        <BorderCountry key={country?.alpha3Code} to={`/${country?.alpha3Code}`}>{country?.name}</BorderCountry>
    );
}


export const BorderSection = ({ country, countries }: Props) => {

    return (
        <Main>
            <Detail>
                <Label>Border Countries: </Label>
                <Value>
                    {country?.borders?.map(codeToCountryName(countries as Country[])).map(toComponent) || "None"}
                </Value>
            </Detail>
        </Main>
    );
}
