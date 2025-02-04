import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideCirclePlus } from '@ng-icons/lucide';
import { DashboardService } from '@/app/services/dashboard.service';

@Component({
  selector: 'app-widgets-panel',
  imports: [NgIconComponent],
  providers: [provideIcons({ lucideCirclePlus })],
  // templateUrl: './widgets-panel.component.html',
  template: `
    <div class="widget-panel-header">
      <ng-icon name="lucideCirclePlus" />
    </div>
    @for (w of store.widgetsToAdd(); track w.id) {

    }
  `,
  styleUrl: './widgets-panel.component.scss'
})
export class WidgetsPanelComponent {
  store = inject(DashboardService)
}
