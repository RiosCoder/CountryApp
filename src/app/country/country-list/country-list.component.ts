import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {
  ngOnInit(): void {
    console.log('on init country list component');
  }

  @Input() listar: string = '';
  lista: string = 'mostrar';
}
