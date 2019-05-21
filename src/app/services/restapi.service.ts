import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  url : string;
  constructor(private http: HttpClient) { }

  getRemoteUsers = function()
  {
    //this.url = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
