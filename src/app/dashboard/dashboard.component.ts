import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWidgetComponent } from '../components/app-widget/app-widget.component';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AppWidgetComponent, DragDropModule],
  // templateUrl: './dashboard.component.html',
  template: `
    <div cdkDropList (cdkDropListDropped)="onDrop($event)" class="drop-list">
      <app-widget cdkDrag *ngFor="let widget of widgets" [title]="widget.title">
        <!-- Custom widget content -->
      </app-widget>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  widgets = [
    { title:  'Widge 1' },
    { title: 'Widget 2' },
    { title: 'Widget 3' },
  ];

  onDrop(event: CdkDragDrop<string[]>): void {
    console.log('Item dropped:', event);
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex)
  }
}
