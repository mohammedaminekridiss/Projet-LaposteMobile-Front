import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'https://localhost:7050/api/Article'; 

  constructor(private http: HttpClient) { }
  
 
    getArticles(): Observable<Article[]> { 
 
      const url = `${this.apiUrl}`;
       return this.http.get<Article[]>(url);
     }
  
    getArticle(id: number): Observable<Article> {
      return this.http.get<Article>(`${this.apiUrl}/${id}`);
    }
  
    createArticle(article: Article): Observable<Article> {
      return this.http.post<Article>(this.apiUrl, article);
    }
  
    updateArticle(id: number, article: Article): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, article);
    }
  
    deleteArticle(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  }
  


