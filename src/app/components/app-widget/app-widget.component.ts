import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  template: `
    <div class="drag-item">
      <h3>{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      @apply p-4 bg-base-100 rounded shadow;
    }
  `]
})
export class AppWidgetComponent {
  @Input() title: string = '';
}
