import { Component, inject, OnInit, signal } from '@angular/core';
import { CountryListComponent } from "../../country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';
import { SearchInputComponent } from "../../search-input/search-input.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  place: string = 'por capital';
  recepcionMensaje: string = "";

  countryService = inject(CountryService)

  isLoading = signal(false)
  isError = signal<string | null>(null)
  countries = signal<Country[]>([])

  ngOnInit(): void {

  }

  onSearch(mensaje: string) {
    if (this.isLoading())
      return;
    this.isLoading.set(true)
    this.isError.set(null)
    this.countryService.searchByCapital(mensaje)
      .subscribe({
        next: (country) => {
          this.isLoading.set(false);
          this.countries.set(country);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(err)
        }
      });
  }


}
