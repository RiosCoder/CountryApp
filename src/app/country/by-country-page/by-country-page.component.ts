import { Component, inject, OnInit } from '@angular/core';
import { SearchInputComponent } from "../search-input/search-input.component";
import { CountryListComponent } from "../country-list/country-list.component";
import { CountryService } from '../services/country.service';
import { throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  countryService = inject(CountryService)
  place: string = 'por pais';
  recepcionMensaje: string = "";
  listaCountry: Country[] = [];
  isError: string | null = null;

  ngOnInit(): void {
    console.log('onInit by-capital');
    console.log('mostrar que: ', this.recepcionMensaje);

  }

  onSearch(mensaje: string) {
    console.log('miraaaa: ', mensaje);
    this.countryService.searchByCountry(mensaje)
      .subscribe({
        next: ((next) => {
          console.log('next: ', next);
          this.listaCountry = next;
        }),
        error: ((err) => {
          this.isError = err;
        })
      });
  }
}
