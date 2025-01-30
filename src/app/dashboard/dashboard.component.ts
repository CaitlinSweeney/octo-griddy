import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { WidgetComponent } from '../components/widget/widget.component';
import { DragDropModule, CdkDragDrop, CdkDropList, moveItemInArray, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DashboardService } from '../services/dashboard.service';

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
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  store = inject(DashboardService);
  location = signal<string>('denver')

  ngOnInit(): void {
    this.renderWidgets();
  }
  ngAfterViewInit(): void {}

  onDrop(event: CdkDragDrop<number, any>): void {
    console.log('Item dropped:', event);
    const { previousContainer, container } = event;
    this.store.updateWidgetPosition(previousContainer.data, container.data)
  }

  private renderWidgets(): void {
    const data = localStorage.getItem('user_dashboard')
    console.log({ renderWidgets: data })
    if (data) {
      const parsedData = JSON.parse(data)
      console.log({ renderWidgets: parsedData })
      this.store.addedWidgets.set(parsedData)
    } else {
      return;
    }
   }
}
