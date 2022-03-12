import React from 'react';
import {NavBar} from "./components/commons/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/home/HomePage";
import {CountryPage} from "./components/country/CountryPage";

function App() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar/>
                <main>
                    <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/:countryCode" element={<CountryPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
