import {CountryFormatter} from "../../utils/countryFormatter";
import React from "react";
import styled from "styled-components";
import {Detail, Label, Value} from "./CountryPage";
import {Country} from "../../api/model/Country";


const Main = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    
    @media (min-width: 1300px) {
        max-height: 160px;
    }
`

interface Props {
    country?: Country
}

export const InfoSection = ({ country }: Props) => {

    return (
        <Main>
            <Detail>
                <Label>Native Name: </Label>
                <Value> {country?.nativeName} </Value>
            </Detail>
            <Detail>
                <Label>Population: </Label>
                <Value> {country && CountryFormatter.formatPopulation(country)} </Value>
            </Detail>
            <Detail>
                <Label>Region: </Label>
                <Value> {country?.region} </Value>
            </Detail>
            <Detail>
                <Label>Sub Region: </Label>
                <Value> {country?.subregion} </Value>
            </Detail>
            <Detail>
                <Label>Capital: </Label>
                <Value> {country?.capital} </Value>
            </Detail>
            <Detail>
                <Label>Top Level Domain: </Label>
                <Value> {country?.topLevelDomain} </Value>
            </Detail>
            <Detail>
                <Label>Currencies: </Label>
                <Value> {country?.currencies?.map(c => c.name).join(',')} </Value>
            </Detail>
            <Detail>
                <Label>Languages: </Label>
                <Value> {country?.nativeName} </Value>
            </Detail>
        </Main>
    );
}
