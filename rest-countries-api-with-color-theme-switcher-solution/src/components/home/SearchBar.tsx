import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectCountryNameFilter, updateCountryName} from "../../redux/searchReducer";
import {AppDispatch} from "../../redux/store";

interface Props {

}

const Main = styled.div`
    height: inherit;
    width: 480px;
    display: flex;
    align-items: center;
    border-radius: 2%;
    background-color: ${props => props.theme.colors.elements};
    -webkit-box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
    -moz-box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
    box-shadow: 1px 1px 10px -9px ${({theme}) => theme.colors.shadowColor};
    color: ${props => props.theme.colors.text};
`

const Prefix = styled.div`
    padding: 0 1.5rem 0 2rem;
    max-width: 3.5rem;
`

const Input = styled.input`
    border: none;
    color: ${({theme}) => theme.colors.text};
    background-color: ${props => props.theme.colors.elements};
    padding: 20px 0;
    width: 200px;
    flex: auto;
    
    &:focus {
        outline: none;
    }
`

export const SearchBar = (props: Props) => {
    const searchValue = useSelector(selectCountryNameFilter);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Main>
            <Prefix>
                <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={"16px"}/>
            </Prefix>
            <Input
                value={searchValue}
                placeholder="Search for a country..."
                onChange={({ target: { value} }) => dispatch(updateCountryName(value))}
            />
        </Main>
    );
}
