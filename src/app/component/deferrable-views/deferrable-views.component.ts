import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [MaterialModule, ProductDetailsComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {

  isCheckedDefer = signal(false);
  isView = signal(false);
  isTrue: boolean = false;
  cardList = [
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well cardList
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well cardList
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    {
      userImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      cardImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cardDesc: ` The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
  ];
}
