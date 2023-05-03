import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FurColor } from '../models/furcolor';

@Injectable({
  providedIn: 'root',
})
export class FurColorService {
  private readonly baseUrl = environment.backendUrl + '/api/data';

  constructor(private http: HttpClient) {
  }

  public getFurColors(): Observable<FurColor[]> {
    const url = this.baseUrl + '/furcolors';
    return this.http.get<FurColor[]>(url);
  }
}
