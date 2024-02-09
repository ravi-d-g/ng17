import { Component } from '@angular/core';
import { C2Component } from '../c-2/c-2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-c-1',
  standalone: true,
  imports: [C2Component, CommonModule, FormsModule, BreadcrumbComponent, RouterModule],
  templateUrl: './c-1.component.html',
  styleUrl: './c-1.component.scss'
})
export class C1Component {

  color = 'red';

}
