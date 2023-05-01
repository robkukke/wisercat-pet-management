import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FurColor } from '../models/furcolor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FurColorService {
  private furColorsUrl: string;

  constructor(private http: HttpClient) {
    this.furColorsUrl = 'http://localhost:8080/furcolors';
  }

  public getFurColors(): Observable<FurColor[]> {
    return this.http.get<FurColor[]>(this.furColorsUrl);
  }
}
