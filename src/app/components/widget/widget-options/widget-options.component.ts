import { Component, inject, input, model, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideX, lucideSquareArrowRight, lucideSquareArrowLeft } from '@ng-icons/lucide';
import { DashboardService } from '../../../services/dashboard.service';
import { Widget } from '../widget.component';


@Component({
  selector: 'app-widget-options',
  imports: [NgIconComponent],
  providers: [provideIcons({lucideX})],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  data = input.required<Widget>()
  store = inject(DashboardService)
  showOptions = model<boolean>(false)
  options = [1,2,3,4];

  get widget() {
    return this.data();
  }
}
