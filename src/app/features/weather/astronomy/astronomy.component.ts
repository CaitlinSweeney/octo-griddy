import { Component, inject, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lucideMoon, lucideSunrise, lucideMoonStar, lucideSunset } from '@ng-icons/lucide';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { environment } from '@/environments/environment';
import { ApiService } from '@/app/services/api.service';
import { astronomyResponse } from './mockAstronomy';

const defaultState = {
  location: {
    name: '',
    region: '',
    country: '',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime_epoch: 0,
    localtime: '',
  },
  astronomy: {
    astro: {
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
      moon_phase: '',
      moon_illumination: 0,
      is_moon_up: 0,
      is_sun_up: 0,
    },
  },
}

@Component({
  selector: 'app-app-astronomy',
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({lucideMoon, lucideSunset, lucideSunrise, lucideMoonStar })],
  templateUrl: './astronomy.component.html',
  styleUrl: './astronomy.component.scss'
})
export class AstronomyComponent {
  apiService = inject(ApiService);
  data = signal<AstronomyResponse>(defaultState);

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()?.location?.name) {
          this.apiService.getAstronomyRequest().subscribe(res => this.data.set(res as AstronomyResponse));
        }
      } else {
        this.data.set(astronomyResponse)
      }
    })
  }
}

export interface AstronomyResponse {
  location: Location
  astronomy: Astronomy
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Astronomy {
  astro: Astro
}

export interface Astro {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: number
  is_moon_up: number
  is_sun_up: number
}
