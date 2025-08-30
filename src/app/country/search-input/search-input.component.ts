import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})

export class SearchInputComponent implements OnInit {
  @Input() placeholder:string='';
  @Output() mensaje = new EventEmitter<string>();
  ngOnInit(): void {
    console.log('onInit searchInput');

  }

  onSearch(value: string): void {
    this.mensaje.emit(value);
  }

}
