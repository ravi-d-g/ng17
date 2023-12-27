import { Component } from '@angular/core';
import { CardCComponent } from '../card-c/card-c.component';
import { MaterialModule } from '../../material.module';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-p',
  standalone: true,
  imports: [
    CardCComponent,
    MaterialModule,
    ProductDetailsComponent,
    BreadcrumbComponent,
    RouterModule,
  ],
  templateUrl: './card-p.component.html',
  styleUrl: './card-p.component.scss',
})
export class CardPComponent {
  data = 'Child 2 Data';
}
