import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://192.168.0.15:4002/users/';

  constructor(private http: HttpClient) { }




  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }

  updateUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  // getUser(id: string): Observable<any>{
  //   return this.http.get(this.url + id).snapshotChanges();
  // }


}
