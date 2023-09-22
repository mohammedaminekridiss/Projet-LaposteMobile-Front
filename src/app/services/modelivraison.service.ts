import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeLivraison } from '../models/Modelivraison';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelivraisonService {

  private apiUrl = 'https://localhost:7050/api/ModeLivraison'; 

  constructor(private http: HttpClient) { }
  
 
    getlivraison(): Observable<ModeLivraison[]> { 
 
        return this.http.get<ModeLivraison[]>(`${this.apiUrl}`);
     }
}
