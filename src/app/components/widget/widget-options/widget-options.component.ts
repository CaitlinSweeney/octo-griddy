import { Component, inject, input, model, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { DashboardService } from '../../../services/dashboard.service';
import { Widget } from '../widget.component';

const options = [1,2,3,4];

@Component({
  selector: 'app-widget-options',
  imports: [NgIconComponent],
  providers: [provideIcons({lucideX})],
  // templateUrl: './widget-options.component.html',
  template: `
    <button class="close-btn" (click)="showOptions.set(false)">
      <ng-icon name="lucideX" />
    </button>
    <div class="grid items-start justify-center gap-8">
      <div class="flex items-center gap-2">
        Width
        <div class="join">
          @for (col of [1,2,3,4]; track col) {
            <button class="btn btn-secondary" [class.btn-active]="data().columns === col"
              (click)="store.updateWidget(data().id, { columns: col })">
              {{ col }}
            </button>
          }
      </div>
      </div>
      <div class="flex items-center gap-2">
        Height
        <div class="join">
          @for (row of [1,2,3,4]; track row) {
            <button class="btn btn-secondary" [class.btn-active]="data().rows === row"
              (click)="store.updateWidget(data().id, { rows: row })">
              {{ row }}
            </button>
            }
        </div>
      </div>
    </div>
  `,
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  data = input.required<Widget>()
  store = inject(DashboardService)
  showOptions = model<boolean>(false)

  get widget() {
    return this.data();
  }
}
