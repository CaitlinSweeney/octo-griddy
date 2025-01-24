import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../components/widget/widget.component';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppAstronomyComponent } from '../features/weather/astronomy/astronomy.component';
import { ForecastComponent } from '../features/weather/forecast/forecast.component';
import { AppMarineComponent } from '../features/weather/marine/marine.component';
import { AppHistoryComponent } from '../features/weather/history/history.component';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WidgetComponent,
    DragDropModule,
  ],
  providers: [DashboardService],
  template: `
    <div>
      <div>
        <div cdkDropList (cdkDropListDropped)="onDrop($event)" class="grid grid-cols-3 grid-rows-3 gap-4">
          @for (w of store.widgets(); track w.id) {
            <app-widget cdkDrag [data]="w" />
          }
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  store = inject(DashboardService);

  // @ViewChild('container', { read: ViewContainerRef, static: true })
  // container!: ViewContainerRef;

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
   // this.renderWidgets();
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    console.log('Item dropped:', event);
    moveItemInArray(this.store.widgets(), event.previousIndex, event.currentIndex)

    // this.widgets.forEach((widget, idx) => {
    //   widget.index = idx;
    // })

    console.log('widgets:', this.store.widgets());
    localStorage.setItem('user_dashboard', JSON.stringify(this.store.widgets()))
  }


  // renderWidgets(): void {
  //   this.container.clear();
  //   for (const widget of this.widgets) {
  //     const componentRef = this.container.createComponent(widget.component);
  //   }
  // }
}
