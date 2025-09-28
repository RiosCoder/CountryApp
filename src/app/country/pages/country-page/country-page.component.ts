import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  ngOnInit(): void {
    console.log('oninit country page');

  }

  onSearch(){

  }

}
