import styled from "styled-components";
import {Country} from "../../api/model/Country";

interface Props {
    country: Pick<Country, "name" | "population" | "region" | "capital" | "flags">
}

const Main = styled.div`
    height: 337.5px;
    width: 265px;
    background-color: ${props => props.theme.colors.elements};
    border-radius: 2%;
    overflow: hidden;
    -webkit-box-shadow: 1px 1px 7px -5px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 1px 7px -5px rgba(66, 68, 90, 1);
    box-shadow: 1px 1px 7px -5px rgba(66, 68, 90, 1);
    
    &:hover {
        box-shadow: 1px 1px 13px 2px rgb(0 0 0);
    }
`
export const Flag = styled.div.attrs(
    (props: { url: string }) => ({
        url: props.url
    })
)`
    width: 265px;
    height: 160px;
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

const Details = styled.div`
    padding: 1.5rem;
`

const Title = styled.p`
    margin: 0.025rem 0 1rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    font-size: 18px;
`
const Label = styled.span`
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    font-size: ${props => props.theme.typography.homePageItemsFontSize}
`
const Value = styled.span`
    font-weight: ${props => props.theme.typography.fontWeight.light};
`
const DetailMain = styled.div`
   margin: 0.35rem 0;
`

const Detail = ( { label, value }: { label: string, value: string }) => {
    return (
        <DetailMain>
            <Label> { label } </Label>
            <Value> { value }</Value>
        </DetailMain>
    );
}

export const Card = ({ country }: Props) => {
    return (
        <Main>
            <Flag url={country.flags.svg}/>
            <Details>
                <Title> {country.name} </Title>
                <Detail label={"Population: "} value={country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                <Detail label={"Region: "} value={country.region} />
                <Detail label={"Capital: "} value={country.capital} />
            </Details>
        </Main>
    );
}
