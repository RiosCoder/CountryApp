import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements OnInit {
  @Input() mensaje: string = "";

  ngOnInit(): void {
    console.log('onInit searchInput');

  }


  onSearch(value: string): void {
    this.mensaje = value;
  }

}
