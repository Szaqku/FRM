import styled from "styled-components";
import {FilterBar} from "./FilterBar";
import {Card} from "./Card";
import React, {useCallback} from "react";
import {useGetAllCountriesQuery} from "../../api/model/api";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCountryNameFilter, selectRegionFilter} from "../../redux/searchReducer";
import {Country} from "../../api/model/Country";

const CardSection = styled.div`
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
    ${({theme}) => theme.globalLeftRightSpacing};
    display: grid;
    grid-template-columns: repeat(auto-fill, 265px);
    grid-template-rows: repeat(auto-fill, 337.5px);
    grid-column-gap: 74px;
    grid-row-gap: 75px;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 520px) {
        justify-content: space-between;
    }
`

const ClickableCard = styled.div`
    cursor: pointer;
`

interface Props {
}

export const HomePage = (props: Props) => {
    const { data } = useGetAllCountriesQuery();
    const nameFilter = useSelector(selectCountryNameFilter);
    const regionFilter = useSelector(selectRegionFilter);
    const navigate = useNavigate();

    const filter = useCallback((country: Country) => {
        return (!nameFilter || country.name.toLowerCase().includes(nameFilter))
            && (!regionFilter || country.region === regionFilter)
    }, [nameFilter, regionFilter, data])

    return (
        <>
            <FilterBar/>
            <CardSection>
                {
                    data?.filter(filter).map((country) => (
                        <ClickableCard
                            key={country.alpha3Code}
                            onClick={() => navigate(`/${country.alpha3Code}`)}
                        >
                            <Card country={country} />
                        </ClickableCard>
                    ))
                }
            </CardSection>
        </>
    )
}
