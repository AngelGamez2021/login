import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= 'http://192.168.0.15:4002/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return  this.http.get(this.url);
  }
}
