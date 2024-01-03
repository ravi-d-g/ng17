import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-es6',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './es6.component.html',
  styleUrl: './es6.component.scss',
})
export class Es6Component {}
