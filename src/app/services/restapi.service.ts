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
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
  getEmpById= function(id)
  {
    //this.url = `https://jsonplaceholder.typicode.com/users`;
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/'+id);
  }
 deleteEmpById= function(id)
  {
    //this.url = `https://jsonplaceholder.typicode.com/users`;
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id);
  }

  addEmp= function(emp)
  {
    return this.http.post('http://dummy.restapiexample.com/api/v1/create', emp);
  }
}
