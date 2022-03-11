import React from 'react';
import {ProfileCard} from "./components/ProfileCard";
import styled from "styled-components";

const info = {
    name: 'Victor Crest',
    age: 26,
    location: 'London'
}

const stats = {
    followers: 80_000,
    likes: 803_000,
    photos: 1400
}

const TopPattern = styled.div`
    position: absolute;
    z-index: -1;
    background-image: url('${process.env.PUBLIC_URL}/images/bg-pattern-top.svg');
    width: 978px;
    height: 978px;
    bottom: 30%;
    right: 50%;
`

const BottomPattern = styled.div`
    position: absolute;
    background-image: url('${process.env.PUBLIC_URL}/images/bg-pattern-bottom.svg');
    width: 978px;
    height: 978px;
    left: 45%;
    top: 55%;
    z-index: -1;
`

const StyledApp = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    return (
        <StyledApp>
            <TopPattern/>
            <ProfileCard info={info} stats={stats}/>
            <BottomPattern/>
        </StyledApp>
    );
}

export default App;
