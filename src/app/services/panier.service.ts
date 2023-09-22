import { Injectable } from '@angular/core';
import { OffreEngagement } from '../models/Offreengagement';
import { Article } from '../models/Article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7050/api/Souscription/';

  ajouterAuPanier(offre: OffreEngagement) {
    const offreSelectionneeID = localStorage.getItem('offreSelectionnee');
    const articleSelectionneeID = localStorage.getItem('articleSelectionnee');
    const panierJSON = localStorage.getItem('panier');
    const panierActuel: { offre: OffreEngagement | null, article: Article | null } = JSON.parse(panierJSON!) || { offre: null, article: null };
    if (offreSelectionneeID) {
      panierActuel.offre = null;
    }
    if (articleSelectionneeID) {
      panierActuel.article = null;
    }
    panierActuel.offre = offre;
    localStorage.setItem('panier', JSON.stringify(panierActuel));
    localStorage.setItem('offreSelectionnee', offre.idOffreEngagement.toString());
  }

  ajouteraupanier(telephone: Article) {
    const articleSelectionneeID = localStorage.getItem('articleSelectionnee');
    const panierJSON = localStorage.getItem('panier');
    const panierActuel: { offre: OffreEngagement | null, article: Article | null } = JSON.parse(panierJSON!) || { offre: null, article: null };
    if (articleSelectionneeID) {
      panierActuel.article = null;
    }
    panierActuel.article = telephone;
    localStorage.setItem('panier', JSON.stringify(panierActuel));
    localStorage.setItem('articleSelectionnee', telephone.idArticle.toString());
  }
  commander(offre: number, articleId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Commander/${offre}/${articleId}`, {});
  }
  modifierSouscriptionAvecModeLivraison(id: number, idl: number) {
    const id_souscription = localStorage.getItem('id_souscription')
    const url = `${this.apiUrl}${id_souscription}/${idl}`;
    this.http.put(url, null).subscribe(
      (response) => {
        console.log('Souscription modifiée avec succès :', response);
      },
      (error) => {
        console.error('Erreur lors de la modification de la souscription :', error);
      }
    );
  }


}






