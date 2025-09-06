import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = "https://restcountries.com/v3.1";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string) {
    console.log('entra');

    let parametroMinuscula = query.toLowerCase();
    console.log('mostrar minusculas: ', parametroMinuscula);

    const url: string = API_URL + '/capital/' + parametroMinuscula;
    console.log('url: ', url);

    return this.http.get(url)
  }

}
