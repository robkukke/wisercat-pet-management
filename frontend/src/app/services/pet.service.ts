import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private petsUrl: string;

  constructor(private http: HttpClient) {
    this.petsUrl = 'http://localhost:8080/pets';
  }

  public getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  public getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petsUrl}/${id}`);
  }

  public savePet(pet: Pet) {
    return this.http.post<Pet>(this.petsUrl, pet);
  }

  public editPet(id: number, value: any) {
    return this.http.put<Pet>(`${this.petsUrl}/${id}`, value);
  }
}
