import { Component, inject, input, model, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideX, lucideTrash } from '@ng-icons/lucide';
import { DashboardService } from '../../../services/dashboard.service';
import { Widget } from '../widget.component';


@Component({
  selector: 'app-widget-options',
  imports: [NgIconComponent],
  providers: [provideIcons({lucideX, lucideTrash})],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  data = input.required<Widget>()
  store = inject(DashboardService)
  showOptions = model<boolean>(false)
  options = [1,2,3,4, 5];

  removeWidget(id: number) {
    this.store.removeWidget(id)
    this.showOptions.set(false)
  }

  get widget() {
    return this.data();
  }
}
