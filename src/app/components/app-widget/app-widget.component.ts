import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  template: `
    <div class="card widget">
      <h3>{{ title }}</h3>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .widget {
      @apply p-4 bg-base-100 rounded shadow;
    }
  `]
})
export class AppWidgetComponent {
  @Input() title: string = '';
  @Input() columns: string = '';
  @Input() rows: string = '';
  @Input() id: number = 0;
}
