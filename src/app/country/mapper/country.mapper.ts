import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-country.interface";

export class CountryMapper {
  static mapeaCountry(restCountry: RESTCountry): Country {
    let country: Country = {
      cca2: "",
      flag: "",
      flagSvg: "",
      capital: "",
      population: 0,
      name: ""
    };
    country.cca2 = restCountry.cca2;
    country.flag = restCountry.flag;
    country.flagSvg = restCountry.flags.svg;
    country.name = restCountry.translations["spa"].common;
    country.capital = restCountry.capital.join(',');
    country.population = restCountry.population;

    return country;
  }

  static mapeaListaCountry(restCountryList: RESTCountry[]): Country[] {
    let lista = restCountryList.map(this.mapeaCountry);
    return lista;
  }
}
