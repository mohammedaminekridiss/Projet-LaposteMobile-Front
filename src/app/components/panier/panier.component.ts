import { Component, OnInit } from '@angular/core';
import { OffreEngagement } from 'src/app/models/Offreengagement';
import { Subscription } from 'rxjs'; // Importez Subscription depuis RxJS
import { OffreengagementService } from 'src/app/services/offreengagement.service';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/Article';
import { PrixArticle } from 'src/app/models/Prix-Article';
import { PrixArticleService } from 'src/app/services/prix-article.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panierVide: boolean = true;
  offreSelectionnee: OffreEngagement | null = null;
  articleSelectionnee: Article | null = null;
  prixArticles: PrixArticle[] = [];
  panier: { offres: OffreEngagement[], articles: Article[] } = { offres: [], articles: [] };
  private subscription?: Subscription;

  
  constructor(private offreEngagementService: OffreengagementService, private articleService: ArticlesService, private router: Router
    , private prixArticleService: PrixArticleService, private panierservice: PanierService,

  ) { }

  ngOnInit() {
    const panierData = localStorage.getItem('panier');

    if (panierData) {
      this.panier = JSON.parse(panierData);
    }
    const offreSelectionneeID = localStorage.getItem('offreSelectionnee');
    const articleSelectionneeID = localStorage.getItem('articleSelectionnee');

    if (offreSelectionneeID || articleSelectionneeID) {
      if (offreSelectionneeID) {
        this.subscription = this.offreEngagementService.getoffre(Number(offreSelectionneeID))
          .subscribe((offre: OffreEngagement) => {
            this.offreSelectionnee = offre;
            this.getPrixArticles();
          });
      }

      if (articleSelectionneeID) {
        this.subscription = this.articleService.getArticle(Number(articleSelectionneeID))
          .subscribe((article: Article) => {
            this.articleSelectionnee = article;
            this.getPrixArticles();
          });
      }

      this.panierVide = false;
    }
  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  modifierForfait(offre: OffreEngagement) {
    this.router.navigate(['/forfaits']);
  }
  modifierArticle(article: Article) {
    this.router.navigate(['/telephone']);
  }

  supprimerForfait(offre: OffreEngagement) {
    const offreASupprimerID = offre.idOffreEngagement.toString();
    const panierData = localStorage.getItem('panier');

    if (panierData !== null) {
      const panierActuel = JSON.parse(panierData);

      if (panierActuel.offre && panierActuel.offre.idOffreEngagement.toString() === offreASupprimerID) {
        localStorage.removeItem('offreSelectionnee');
        panierActuel.offre = null;
        localStorage.setItem('panier', JSON.stringify(panierActuel));
        window.location.reload();

      }
    }
  }

  getPrixArticles(): void {
    if (this.offreSelectionnee && this.articleSelectionnee) {
      this.prixArticleService.getPrixArticlesByIdOffreAndArticle(this.offreSelectionnee.idOffreEngagement, this.articleSelectionnee.idArticle)
        .subscribe((prixArticles: PrixArticle[]) => {
          this.prixArticles = prixArticles;
        });
    }
  }
  passerCommande() {
    const offreSelectionneeStr = localStorage.getItem('offreSelectionnee');
    const offreSelectionnee = offreSelectionneeStr ? parseInt(offreSelectionneeStr, 10) : null;

    const articleSelectionneeStr = localStorage.getItem('articleSelectionnee');
    const articleSelectionnee = articleSelectionneeStr ? parseInt(articleSelectionneeStr, 10) : null;
    if (offreSelectionnee !== null && articleSelectionnee !== null) {
      this.panierservice.commander(offreSelectionnee, articleSelectionnee).subscribe({
        next: (v) => {
          localStorage.setItem('id_souscription', v);
        },

        error: (e) => console.error(e),
        complete: () => console.info('complete')
      },);
    } else {
      console.error('Les valeurs d\'offre et d\'article ne sont pas présentes ou ne sont pas des nombres valides.');
    }

  }
  supprimerArticle(article: Article) {
    const articleASupprimerID = article.idArticle.toString();
    const panierData = localStorage.getItem('panier');
    if (panierData !== null) {
      const panierActuel = JSON.parse(panierData);
      if (panierActuel.article && panierActuel.article.idArticle.toString() === articleASupprimerID) {
        localStorage.removeItem('articleSelectionnee');
        panierActuel.article = null;
        localStorage.setItem('panier', JSON.stringify(panierActuel));
        window.location.reload();
      }
    }
  }
  calculerSomme(): number {
    let somme = 0;
    if (this.offreSelectionnee) {
      somme += this.offreSelectionnee.prix || 0;
    }
    for (let prixArticle of this.prixArticles) {
      somme += prixArticle.prixArticle1 || 0;
    }
    return somme;
  }
  naviguerVerscoordonnees() {
    this.router.navigate(['/coordonnees'], { state: { Subscription: this.subscription } });
  }
}


