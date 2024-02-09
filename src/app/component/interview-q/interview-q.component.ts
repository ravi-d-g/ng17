import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-interview-q',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent],
  templateUrl: './interview-q.component.html',
  styleUrl: './interview-q.component.scss',
})
export class InterviewQComponent {}
