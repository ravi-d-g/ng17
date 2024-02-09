import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { YService } from '../../y.service';

@Component({
  selector: 'app-d',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './d.component.html',
  styleUrl: './d.component.scss'
})
export class DComponent {



  constructor(private yService: YService) {
    this.yService.getData().subscribe(resp => {
    })

  }



}
