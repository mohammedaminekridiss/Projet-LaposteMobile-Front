import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prospect } from '../models/Prospect';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  private apiUrl = 'https://localhost:7050/api/Prospect';
  constructor(private http: HttpClient) { }
  createprospect(prospect: Prospect, idsouscription: any): Observable<Prospect> {
    return this.http.post<Prospect>(`${this.apiUrl}/add/${idsouscription}`, prospect);

  }
}
