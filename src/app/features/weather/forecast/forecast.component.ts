import { Component } from '@angular/core';

@Component({
  selector: 'app-app-forecast',
  imports: [],
  templateUrl: './app-forecast.component.html',
  styleUrl: './app-forecast.component.css'
})
export class ForecastComponent {
  title = 'Forecast Data'
  id = 3
  columns = 1
  rows = 1
}
