import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: `
    <div>
      <h1>Welcome to the App</h1>
     <app-dashboard></app-dashboard> <!-- Use the DashboardComponent -->
   </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-app';
}
