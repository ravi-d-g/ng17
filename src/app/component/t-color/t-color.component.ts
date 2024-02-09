import { Component } from '@angular/core';
import { TextColorDirective } from '../../text-color.directive';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-t-color',
  standalone: true,
  imports: [TextColorDirective, BreadcrumbComponent, RouterModule],
  templateUrl: './t-color.component.html',
  styleUrl: './t-color.component.scss'
})
export class TColorComponent {

}
