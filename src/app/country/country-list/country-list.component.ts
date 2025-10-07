import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {

  @Input() listaPadre: Country[] = [];
  lista: string = 'mostrar';

  ngOnInit(): void {
    console.log('on init country list component');
    console.log('lista padre: ',this.listaPadre);

  }


}
