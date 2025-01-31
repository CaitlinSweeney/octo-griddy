import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { UnsplashResponse } from './dashboard/types';
import { unsplashRes } from './utils/mockUnsplash';
import { HttpClient } from '@angular/common/http';

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
    this.backgroundImage.set(unsplashRes);
    // this.http.get('/unsplash/photos/random').subscribe((res) => this.backgroundImage.set((res as UnsplashResponse)))
  }
  get backgroundImageHref() {
    console.log({ full: this.backgroundImage()?.urls?.full })
    return this.backgroundImage()?.urls?.full
   }
}
