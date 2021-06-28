import { Animal } from './../../models/Animal';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CrudService {
  urlBase: string = 'http://localhost:5050/api/';

  constructor(private client: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.client.get<Animal[]>(`${this.urlBase}animal/`);
  }

  createAnimal(animal: Animal): Observable<any> {
    return this.client.post<any>(`${this.urlBase}animal/`, animal);
  }

  deleteAnimal(id): Observable<any> {
    return this.client.delete<any>(`${this.urlBase}animal/${id}`);
  }
}
