import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OffreEngagement } from '../models/Offreengagement';
import { Router } from '@angular/router';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private offresPanier: OffreEngagement[] = [];
  private articlesPanier: Article[] = [];

  offreSelectionnee = new BehaviorSubject<OffreEngagement | null>(null);
  articleSelectionnee = new BehaviorSubject<Article | null>(null);


  constructor(private router: Router) {}

  ajouterOffre(offre: OffreEngagement) {
    this.offresPanier.push(offre);
    this.offreSelectionnee.next(offre);
    this.router.navigate(['/panier']);

  }
  supprimerOffre(offreId: number) {
    this.offresPanier = this.offresPanier.filter(offre => offre.idOffreEngagement !== offreId);
    this.offreSelectionnee.next(null);
  }

  getOffresPanier() {
    return this.offresPanier;
  }
  ajouterArticle(article: Article) {
    this.articlesPanier.push(article);
    this.articleSelectionnee.next(article);
    this.router.navigate(['/panier']);

  }
  supprimerArticle(articleId: number) {
    this.articlesPanier = this.articlesPanier.filter(article => article.idArticle !== articleId);
    this.articleSelectionnee.next(null);
  }

  getArticlesPanier() {
    return this.articlesPanier;
  }
}
