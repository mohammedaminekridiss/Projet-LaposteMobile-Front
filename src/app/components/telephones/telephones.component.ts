import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { CaracteristiquesArticles } from 'src/app/models/CaracteristiquesArticles';
import { PrixArticle } from 'src/app/models/Prix-Article';
import { ArticlesService } from 'src/app/services/articles.service';
import { CaracteristiquesarticlesService } from 'src/app/services/caracteristiquesarticles.service';
import { PrixArticleService } from 'src/app/services/prix-article.service';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: []
})
export class TelephonesComponent {
  articles: Article[] = [];
  selectedOffreEngagementId: number=0;
  prixArticles: PrixArticle[] = []; // Variable pour stocker les prix d'article


  constructor(
    private articlesService: ArticlesService,
    private caracteristiquesService: CaracteristiquesarticlesService,
    private prixArticleService: PrixArticleService,

  ) {}

  ngOnInit(): void {
    this.loadArticles();
        // Récupérez l'ID de l'offre d'engagement depuis le localStorage
  const offreSelectionneeID = localStorage.getItem('offreSelectionnee');
  if (offreSelectionneeID) {
    this.selectedOffreEngagementId = parseInt(offreSelectionneeID, 10);
    // Utilisez l'ID de l'offre d'engagement pour récupérer les prix d'article
    this.getPrixArticles();
  }
  }
  
  getPrixArticles(): void {
    this.prixArticleService.getPrixArticlesByIdEngagement(this.selectedOffreEngagementId)
      .subscribe((prixArticles: PrixArticle[]) => {
        this.prixArticles = prixArticles;
        // Les prix d'article correspondants sont maintenant dans this.prixArticles
        // Vous pouvez les utiliser pour l'affichage dans votre composant
      });
  }
  loadArticles() {
    this.articlesService.getArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
        console.log(data);

        // Maintenant que vous avez les articles, vous pouvez obtenir les caractéristiques associées à chacun
        this.loadCaracteristiquesForArticles();
      },
      (error: any) => { // Spécifiez explicitement le type de 'error'
        console.error('Error loading articles:', error);
      }
    );
  }

  loadCaracteristiquesForArticles() {
    for (const article of this.articles) {
      this.caracteristiquesService
        .getCaracteristiquesByArticleId(article.idArticle)
        .subscribe(
          (caracteristiques: CaracteristiquesArticles[]) => {
            article.caracteristiquesArticles = caracteristiques;
          },
          (error: any) => { // Spécifiez explicitement le type de 'error'
            console.error(
              'Error loading caracteristiques for article:',
              error
            );
          }
        );
    }
  }
}
