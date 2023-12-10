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
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    },
    {
      name: 'Day 2 (Built-in Control Flow)',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    }, {
      name: 'Day 3 (Improved Performance)',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    }, {
      name: 'Day 4 (Fresh New Look)',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    }, {
      name: 'Day 5 (Interactive Learning Journey)',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
    }, {
      name: 'Day 6 (Other Noteworthy Changes)',
      updated: new Date('12/10/2023'),
      routerLink: '/deferrable-views',
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
