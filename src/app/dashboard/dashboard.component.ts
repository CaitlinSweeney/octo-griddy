import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWidgetComponent } from '../components/app-widget/app-widget.component';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppAstronomyComponent } from '../components/weather/app-astronomy/app-astronomy.component';
import { AppForecastComponent } from '../components/weather/app-forecast/app-forecast.component';
import { AppMarineComponent } from '../components/weather/app-marine/app-marine.component';
import { AppHistoryComponent } from '../components/weather/app-history/app-history.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AppWidgetComponent,
    DragDropModule,
    AppForecastComponent,
    AppMarineComponent,
    AppHistoryComponent,
    AppAstronomyComponent
  ],
  // templateUrl: './dashboard.component.html',
  template: `
    <div>
      <div>
        <div cdkDropList (cdkDropListDropped)="onDrop($event)" class="grid grid-cols-3 grid-rows-3 gap-4">
          <app-widget cdkDrag *ngFor="let widget of widgets" [title]="widget.title">
            <!-- Custom widget content -->
          </app-widget>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  widgets = [
    {
      component: AppForecastComponent,
      title: 'Forecast Data',
      index: 0,
      data: {
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppMarineComponent,
      title: 'Marine Data',
      index: 1,
      data: {
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppHistoryComponent,
      title: 'History Data',
      index: 2,
      data: {
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppAstronomyComponent,
      title: 'Astronomy Data',
      index: 3,
      data: {
        columns: 2,
        rows: 3,
      }
    },
  ];

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.renderWidgets();
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    console.log('Item dropped:', event);
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex)

    this.widgets.forEach((widget, idx) => {
      widget.index = idx;
    })

    console.log('widgets:', this.widgets);
    localStorage.setItem('user_dashboard', JSON.stringify(this.widgets))
  }


  renderWidgets(): void {
    this.container.clear();
    for (const widget of this.widgets) {
      const componentRef = this.container.createComponent(widget.component);
    }
  }
}
