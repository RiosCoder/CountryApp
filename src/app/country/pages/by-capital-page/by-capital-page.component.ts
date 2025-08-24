import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from "../../search-input/search-input.component";
import { CountryListComponent } from "../../country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  recibe: string = "";

  ngOnInit(): void {
console.log("fff",this.recibe);

  }

  metodo(mensaje: string) {
    console.log('dentro del metodo; ', mensaje);
    console.log('haber verifico: ',this.recibe);

  }


}
