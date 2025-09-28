import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { CountryMapper } from './../mapper/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    const url: string = API_URL + '/capital/' + query;
    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map((respuesta) => CountryMapper.mapeaListaCountry(respuesta)),
        catchError((error) => {
          return throwError(() =>
            new Error('No se pudo obtener paises con ese query: ' + query));
        }),
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url: string = API_URL + "/name/" + query;
    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map((mapea) => CountryMapper.mapeaListaCountry(mapea)),
        catchError((error) => {
          return throwError(() =>
            Error("se genero un error: " + error));
        }),
      );
  }
}
