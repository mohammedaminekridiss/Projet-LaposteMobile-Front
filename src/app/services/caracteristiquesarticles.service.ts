import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaracteristiquesArticles } from '../models/CaracteristiquesArticles';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiquesarticlesService {
  private apiUrl = 'https://localhost:7050/api/CaracteristiquesArticle'; 

  constructor(private http: HttpClient) { }
  
 
    getCaracteristiquesArticles(): Observable<CaracteristiquesArticles[]> { 
      const url = `${this.apiUrl}/}`;
 
      return this.http.get<CaracteristiquesArticles[]>(url);
     }
  
     getCaracteristiquesByArticleId(idArticle: number): Observable<CaracteristiquesArticles[]> {
      const url = `${this.apiUrl}/${idArticle}`;
        return this.http.get<CaracteristiquesArticles[]>(url);
    }
    
    
      
    
    createCaracteristiquesArticle(caracteristiquesarticles: CaracteristiquesArticles): Observable<CaracteristiquesArticles> {
      return this.http.post<CaracteristiquesArticles>(this.apiUrl, caracteristiquesarticles);
    }
  
    updateCaracteristiquesArticle(id: number, caracteristiquesarticles: CaracteristiquesArticles): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, caracteristiquesarticles);
    }
  
    deleteCaracteristiquesArticle(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
