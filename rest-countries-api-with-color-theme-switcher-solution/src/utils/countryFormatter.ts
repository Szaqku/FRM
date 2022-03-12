import {Country} from "../api/model/Country";

export class CountryFormatter {

    static formatPopulation(country: Country) {
        return country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
