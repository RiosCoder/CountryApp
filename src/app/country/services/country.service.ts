import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';
import { ResolveStart } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';

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
}
