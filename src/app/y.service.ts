import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://reqres.in/api/unknown');
  }

}
