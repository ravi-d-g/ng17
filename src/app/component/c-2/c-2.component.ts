import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-c-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-2.component.html',
  styleUrl: './c-2.component.scss'
})
export class C2Component {


  @Input()
  bgColor: any



  constructor() {
    console.log('this.color ==>', this.bgColor)
  }
}
