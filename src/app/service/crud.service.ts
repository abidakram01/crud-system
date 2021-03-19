import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crud } from '../shared/crud';
import { ApiResponse } from '../shared/api.response';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: Crud): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: Crud): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
