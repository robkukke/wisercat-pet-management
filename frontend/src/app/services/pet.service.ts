import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private readonly baseUrl = environment.backendUrl + '/api';

  constructor(private http: HttpClient) {
  }

  // Handle logged in user's pets fetch from database
  public getPets(): Observable<Pet[]> {
    const url = this.baseUrl + '/pets';
    const currentUser = localStorage.getItem('currentUser') ?? '';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('username', currentUser);
    return this.http.get<Pet[]>(url, { headers, params });
  }

  // Handle individual pet fetch from database
  public getPet(id: number): Observable<Pet> {
    const url = this.baseUrl + `/pets/${ id }`;
    return this.http.get<Pet>(url);
  }

  // Handle pet adding to database
  public savePet(pet: Pet) {
    const url = this.baseUrl + '/pets';
    return this.http.post<Pet>(url, pet);
  }

  // Handle pet editing
  public editPet(id: number, value: any) {
    const url = this.baseUrl + `/pets/${ id }`;
    return this.http.put<Pet>(url, value);
  }
}
