import { Component, inject, OnInit } from '@angular/core';
import { SearchInputComponent } from "../../search-input/search-input.component";
import { CountryListComponent } from "../../country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  place: string = 'por capital';
  recepcionMensaje: string = "";

  countryService = inject(CountryService)

  ngOnInit(): void {
    console.log('onInit by-capital');
    console.log('mostrar que: ', this.recepcionMensaje);

  }

  metodo(mensaje: string) {
    console.log('miraaaa: ', mensaje);
    this.countryService.searchByCapital(mensaje)
      .subscribe((resp) => {
        console.log({ resp });

      });
  }


}
