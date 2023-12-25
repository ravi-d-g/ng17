import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fresh-new-look',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './fresh-new-look.component.html',
  styleUrl: './fresh-new-look.component.scss',
  providers: [
    provideImgixLoader('https://material.angular.io/assets/'),
  ]
})
export class FreshNewLookComponent {

  logoUrl = 'img/examples/shiba2.jpg';
  logoAlt = 'Angular logo';

}
