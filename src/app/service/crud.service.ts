import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl: string = ' http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/data`);
  }

  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/data`, user);
  }

  updateUser(user: any) {
    return this.http.put(`${this.baseUrl}/data/` + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/data/` + id);
  }
  

}
