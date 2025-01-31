import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { WidgetComponent } from '../components/widget/widget.component';
import { DragDropModule, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DashboardService, defaultWidgets } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDropListGroup,
    CommonModule,
    WidgetComponent,
    DragDropModule,
    NgIconComponent,
  ],
  providers: [DashboardService, provideIcons({lucidePlus})],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  store = inject(DashboardService);
  location = signal<string>('denver')

  ngOnInit(): void {
    this.loadWidgetsFromLocalStorage();
  }

  onDrop(event: CdkDragDrop<number, any>): void {
    const { previousContainer, container } = event;
    this.store.updateWidgetPosition(previousContainer.data, container.data)
  }

  private loadWidgetsFromLocalStorage(): void {
    const data = localStorage.getItem('user_dashboard')

    if (data) {
      const parsedData = JSON.parse(data)
      const componentMap: Record<number, any> = Object.fromEntries(
        defaultWidgets.map(widget => [widget.id, widget.component])
      );
      const restoredWidgets = parsedData.map((w: any) => ({
          ...w,
          component: componentMap[w.id] || null, // Restore the component

      }));
      this.store.addedWidgets.set(restoredWidgets)
    }
   }
}
