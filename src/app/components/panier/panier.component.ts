import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/Article';
import { OffreEngagement } from 'src/app/models/Offreengagement';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  offreSelectionnee: BehaviorSubject<OffreEngagement | null>;
  articleSelectionne: BehaviorSubject<Article | null>;


  constructor(private router: Router,private panierService: PanierService) {
    this.offreSelectionnee = panierService.offreSelectionnee;
    this.articleSelectionne= panierService.articleSelectionnee;
  }

  ngOnInit(): void {
    // Vous n'avez pas besoin de souscrire ici, car BehaviorSubject gère cela.
  }
  modifierOffre(offre: OffreEngagement) {
     this.router.navigate(['/forfaits']);
  }

  supprimerOffre(offre: OffreEngagement) {
    this.panierService.supprimerOffre(offre.idOffreEngagement);
  }
  modifierArticle(article: Article) {
    this.router.navigate(['/telephone']);
 }

 supprimerArticle(article: Article) {
   this.panierService.supprimerArticle(article.idArticle);
 }
}
