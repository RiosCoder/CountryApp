import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from "../search-input/search-input.component";
import { CountryListComponent } from "../country-list/country-list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  place: string = 'por pais';
  recepcionMensaje: string = "";

  ngOnInit(): void {
    console.log('onInit by-capital');
    console.log('mostrar que: ', this.recepcionMensaje);

  }

  metodo(mensaje: string) {
    console.log('miraaaa: ', mensaje);

  }
}
