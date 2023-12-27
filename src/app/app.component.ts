import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { routes } from './app.routes';
export interface Section {
  name: string;
  updated: Date;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MaterialModule,
    ProductDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng17';

  selectedProductId: any;

  showFiller = false;
  folders: Section[] = [
    {
      name: 'Day 1 (Deferrable Views)',
      updated: new Date('12/18/2023'),
      routerLink: '/deferrable-views',
    },
    {
      name: 'Day 2 (Built-in Control Flow)',
      updated: new Date('12/18/2023'),
      routerLink: '/built-in-control-flow',
    },
    {
      name: 'Day 3 (Improved Performance)',
      updated: new Date('12/10/2023'),
      routerLink: '/test',
    },
    {
      name: 'Day 4 (Fresh New Look)',
      updated: new Date('12/18/2023'),
      routerLink: '/fresh-new-look',
    },
    {
      name: 'Day 5 (Interactive Learning Journey)',
      updated: new Date('12/10/2023'),
      routerLink: '/test',
    },
    {
      name: 'Day 6 (Other Noteworthy Changes)',
      updated: new Date('12/10/2023'),
      routerLink: '/test',
    },
    {
      name: 'Ng-16',
      updated: new Date('12/25/2023'),
      routerLink: '/ng16',
    },
    {
      name: 'TO DO List',
      updated: new Date('12/27/2023'),
      routerLink: '/todo',
    },
  ];
  notes: Section[] = [
    {
      name: 'Deferrable Views',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    },
  ];
}
