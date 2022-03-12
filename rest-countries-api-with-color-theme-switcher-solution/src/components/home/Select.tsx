import styled from "styled-components";
import {useGetAllCountriesQuery} from "../../api/model/api";
import {Country} from "../../api/model/Country";
import {useDispatch, useSelector} from "react-redux";
import {selectRegionFilter, updateRegion} from "../../redux/searchReducer";
import {AppDispatch} from "../../redux/store";

interface Props {

}

const Main = styled.form`
    display: block;
    background-color: ${props => props.theme.colors.elements};
    color: ${({theme}) => theme.colors.text};
    width: 200px;
    border-radius: 2%;
    position: relative;
    -webkit-box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
    -moz-box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
    box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
   
`
const SelectInput = styled.select`
    color: ${({theme}) => theme.colors.text};
    background-color: ${props => props.theme.colors.elements};
    border: none;
    width: 100%;
    appearance: none;
    padding: 17.5px 1rem 17.5px 1.5rem;
    
    &:focus {
        outline: none;
    }
    & > option {
        color: ${({theme}) => theme.colors.text};
        background-color: ${props => props.theme.colors.elements};
    }
    
    background: url('https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png');
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-position: right;
    background-origin: content-box;
`

export const Select = (props: Props) => {
    const { data } = useGetAllCountriesQuery();
    const array = (data as Country[] | undefined)?.map(country => country.region);
    const distinctRegions = Array.from(new Set(array || []))
    const selectedRegion = useSelector(selectRegionFilter);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Main>
            <SelectInput
                aria-label="filter by region"
                onChange={({target: {value}}) => dispatch(updateRegion(value))}
                value={selectedRegion}
            >
                <option value={undefined} hidden label="Filter by Region"/>
                {
                    distinctRegions?.map(region => (
                        <option key={region} value={region} label={region}/>
                    ))
                }
            </SelectInput>
        </Main>
    );
}
