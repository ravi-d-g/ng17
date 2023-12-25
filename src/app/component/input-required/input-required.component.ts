import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-required',
  standalone: true,
  imports: [],
  templateUrl: './input-required.component.html',
  styleUrl: './input-required.component.scss',
})
export class InputRequiredComponent {
  @Input({ required: true }) name: string = '';
}
