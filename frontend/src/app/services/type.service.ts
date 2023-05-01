import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '../models/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private typesUrl: string;

  constructor(private http: HttpClient) {
    this.typesUrl = 'http://localhost:8080/types';
  }

  public getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesUrl);
  }
}
