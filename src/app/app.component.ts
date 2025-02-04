import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { UnsplashResponse } from './dashboard/types';
import { unsplashRes } from './tests/mockUnsplash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  http = inject(HttpClient)
  // @ts-ignore
  backgroundImage = signal<UnsplashResponse | null>(unsplashRes)

  // private unsplashURL = environment.production
  //   ? '/api/unsplash'  // Use Vercel Proxy in prod
  //   : 'https://api.unsplash.com'; // api in dev
  get backgroundImageHref() {
    return this.backgroundImage()?.urls?.full
   }
}
