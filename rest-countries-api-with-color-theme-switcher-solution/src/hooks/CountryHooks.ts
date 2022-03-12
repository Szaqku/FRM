import {useParams} from "react-router-dom";
import {useGetAllCountriesQuery} from "../api/model/api";
import {Country} from "../api/model/Country";

export const useCurrentCountryInfo = () => {
    const { countryCode } = useParams();
    const { data } = useGetAllCountriesQuery();
    const country = data?.find(c => c.alpha3Code === countryCode) as Country;
    const countries = data;

    return { country, countries };
}
