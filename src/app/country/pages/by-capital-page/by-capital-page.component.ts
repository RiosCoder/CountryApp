import { Component } from '@angular/core';
import { SearchInputComponent } from "../../search-input/search-input.component";
import { CountryListComponent } from "../../country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {


  onSearch(value: string): void {
    // Logic for searching by capital
    console.log({ value });

  }
}
