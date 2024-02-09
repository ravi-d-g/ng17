import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CardPComponent } from '../card-p/card-p.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-c',
  standalone: true,
  imports: [CardPComponent, CommonModule],
  templateUrl: './card-c.component.html',
  styleUrl: './card-c.component.scss',
})
export class CardCComponent {
  @Input()
  temp!: TemplateRef<any>;

  public data: any = [
    `Lorem ipsum dolor   amet commodo. Magna eget est lorem ipsum dolor sit. Faucibus ornare suspendisse sed nisi lacus.`,
  ];

  @ContentChild('temp2') temp2!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
