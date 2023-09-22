import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrixArticle } from '../models/Prix-Article';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrixArticleService {
  private apiUrl = 'https://localhost:7050/api/PrixArticle';
  constructor(private http: HttpClient) { }
  getPrixArticlesByIdEngagement(idEngagement: number): Observable<PrixArticle[]> {
    const url = `${this.apiUrl}/${idEngagement}`;
    return this.http.get<PrixArticle[]>(url).pipe(
      tap((prixArticles: PrixArticle[]) => {
      })
    );
  }
  getPrixArticlesByIdOffreAndArticle(idOffre: number, idArticle: number): Observable<PrixArticle[]> {
    return this.http.get<PrixArticle[]>(
      `${this.apiUrl}/GetPrixArticlesByIdOffreAndArticle/${idOffre}/${idArticle}`
    );
  }
}
