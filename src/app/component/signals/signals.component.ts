import { Component, computed, effect, signal } from '@angular/core';
import { InputRequiredComponent } from '../input-required/input-required.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  imports: [InputRequiredComponent],
})
export class SignalsComponent {

  price = signal<number>(10);

  change(value: any) {
    this.price.set(value)
  }
}
