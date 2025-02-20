import { NgComponentOutlet } from '@angular/common';
import { Component, inject, input, signal, Type } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideSettings } from '@ng-icons/lucide';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';
import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

export interface Widget {
  id: number;
  title: string;
  component: Type<unknown>;
  columns: number;
  index: number;
  rows: number;
}

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CdkDrag, CdkDragPlaceholder, NgComponentOutlet, NgIconComponent, WidgetOptionsComponent],
  providers: [provideIcons({ lucideSettings })],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)',
  }
})
export class WidgetComponent {
  data = input.required<Widget>();
  showOptions = signal(false)

  get widget() {
    return this.data();
  }
}
