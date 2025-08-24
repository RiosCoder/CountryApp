import { Component, Input } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Input() buscar: string = "";

  onSearch(value: string): void {

   this.buscar=value;
    console.log({ value });
    console.log('recibidio: ', this.buscar);


  }

}
