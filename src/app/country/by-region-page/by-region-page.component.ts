import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from "../search-input/search-input.component";
import { CountryListComponent } from "../country-list/country-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {
  place: string = 'por region';
  recepcionMensaje: string = "";

  ngOnInit(): void {
    console.log('onInit by-capital');
    console.log('mostrar que: ', this.recepcionMensaje);

  }

  metodo(mensaje: string) {
    console.log('miraaaa: ', mensaje);

  }
}
