import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private readonly baseUrl = environment.backendUrl + '/api/data';

  constructor(private http: HttpClient) {
  }

  // Handle types fetch from database
  public getTypes(): Observable<Type[]> {
    const url = this.baseUrl + '/types';
    return this.http.get<Type[]>(url);
  }
}
