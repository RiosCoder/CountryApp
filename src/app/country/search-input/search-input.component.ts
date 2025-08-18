import { Component } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  onSearch(value: string): void {
    // Logic for searching by capital
    console.log({ value });

  }

}
