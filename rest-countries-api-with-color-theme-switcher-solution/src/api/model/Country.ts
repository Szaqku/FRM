export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Country {
    name: string;
    capital: string;
    subregion: string;
    region: string;
    population: number;
    borders: string[];
    currencies: Currency[];
    languages: Language[];
    alpha3Code: string;
    independent: boolean;
    flags: Flags;
    nativeName: string;
    topLevelDomain: string;
}

export interface Flags {
    png: string;
    svg: string;
}
