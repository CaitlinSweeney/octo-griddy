import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { UnsplashResponse } from './dashboard/types';
import { unsplashRes } from './utils/mockUnsplash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http = inject(HttpClient)
  backgroundImage = signal<UnsplashResponse | null>(null)
  ngOnInit(): void {
    // @ts-ignore
    this.backgroundImage.set(unsplashRes);
  //  this.http.get(`${this.unsplashURL}/photos/random`).subscribe((res) => this.backgroundImage.set((res as UnsplashResponse)))
  }
  private unsplashURL = environment.production
    ? '/api/unsplash'  // Use Vercel Proxy in production
    : 'https://api.unsplash.com'; // Use direct API in development
  get backgroundImageHref() {
    return this.backgroundImage()?.urls?.full
   }
}
