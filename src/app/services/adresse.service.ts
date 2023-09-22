import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adresse } from '../models/Adresse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  private apiUrl = 'https://localhost:7050/api/Adresse'; 

  constructor(private http: HttpClient) { }
  createadresse(adresse:Adresse): Observable<Adresse> {
     return this.http.post<Adresse>(this.apiUrl,adresse);
  }
  updateAdresse(id: number, adresse: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, adresse);
  }

}


