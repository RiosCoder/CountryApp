import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() listar:string='';
lista:string='mostrar';
}
