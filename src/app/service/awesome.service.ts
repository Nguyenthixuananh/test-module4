import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Awesome} from "../model/awesome";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(API_URL + '/awesomes');
  }

  saveAwesome(awesome: any): Observable<Awesome> {
    return this.http.post<Awesome>(API_URL + '/awesomes', awesome);
  }

  findById(id: number):Observable<Awesome>{
    return this.http.get<Awesome>(`${API_URL}/awesomes/${id}`);
  }

  updateAwesome(id: number, awesome: Awesome): Observable<Awesome>{
    return this.http.put<Awesome>(`${API_URL}/awesomes/${id}`, awesome);
  }

  deleteAwesome(id: number):Observable<Awesome>{
    return this.http.delete<Awesome>(`${API_URL}/awesomes/${id}`);
  }
}
