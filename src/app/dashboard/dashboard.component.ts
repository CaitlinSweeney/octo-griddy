import { Component, inject, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { WidgetComponent } from '../components/widget/widget.component';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
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
