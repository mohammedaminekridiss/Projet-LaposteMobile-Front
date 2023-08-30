import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreEngagement } from '../models/Offreengagement';

@Injectable({
  providedIn: 'root'
})
export class OffreengagementService {

  private apiUrl = 'https://localhost:7050/api/OffreEngagement'; 

  constructor(private http: HttpClient) { }
  
 
    getoffres(): Observable<OffreEngagement[]> { 
 
      const url = `${this.apiUrl}`;
       return this.http.get<OffreEngagement[]>(url);
     }
  
    getoffre(id: number): Observable<OffreEngagement> {
      return this.http.get<OffreEngagement>(`${this.apiUrl}/${id}`);
    }
  
    createoffre(offreEngagement: OffreEngagement): Observable<OffreEngagement> {
      return this.http.post<OffreEngagement>(this.apiUrl, offreEngagement);
    }
  
    updateoffre(id: number, offreEngagement: OffreEngagement): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, offreEngagement);
    }
  
    deleteoffre(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }}
