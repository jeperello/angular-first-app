import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location.component';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingInfo of housingLocationList" [housingLocation]="housingInfo"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
   housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.housingLocationList;
  }
}
