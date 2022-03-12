import {SearchBar} from "./SearchBar";
import {Select} from "./Select";
import styled from "styled-components";


interface Props {

}

const Main = styled.div`
    background-color: ${props => props.theme.colors.background};
    padding-top: 0;
    padding-bottom: 43px;
    ${({theme}) => theme.globalLeftRightSpacing}
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 40px;
`

export const FilterBar = (props: Props) => {
    return (
        <Main>
            <SearchBar />
            <Select />
        </Main>
    );
}
