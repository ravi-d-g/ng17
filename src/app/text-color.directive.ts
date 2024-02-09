import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red"
  }

}
