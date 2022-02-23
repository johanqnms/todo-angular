import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../models/todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  todo: Todos = new Todos;
  API_URL = 'https://608adc0d737e470017b7410f.mockapi.io/api/v1/todos';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${this.API_URL}`);
  }
}
