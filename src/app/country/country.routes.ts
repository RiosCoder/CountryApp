
import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './by-region-page/by-region-page.component';


export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country-page',
        component: ByCountryPageComponent
      },
      {
        path: 'by-region-page',
        component: ByRegionPageComponent
      }
    ]
  },
  /* {
    path:'country',
    //??{}
  }, */
  {
    path: '**',
    redirectTo: 'by-capital',
  }
];

export default countryRoutes;
