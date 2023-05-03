import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly baseUrl = environment.backendUrl + '/api/data';

  constructor(private http: HttpClient) {
  }

  // Handle countries of origin fetch from database
  public getCountries(): Observable<Country[]> {
    const url = this.baseUrl + '/countries';
    return this.http.get<Country[]>(url);
  }
}
