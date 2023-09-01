import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { CaracteristiquesArticles } from 'src/app/models/CaracteristiquesArticles';
import { ArticlesService } from 'src/app/services/articles.service';
import { CaracteristiquesarticlesService } from 'src/app/services/caracteristiquesarticles.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-caracteristiquesarticles',
  templateUrl: './caracteristiquesarticles.component.html',
  styleUrls: ['./caracteristiquesarticles.component.css']
})
export class CaracteristiquesarticlesComponent {

  article: Article | undefined;
  caracteristiques: CaracteristiquesArticles[] = [];

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private caracteristiquesService: CaracteristiquesarticlesService,
    private panierservice : PanierService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.loadArticle(articleId);
      this.loadCaracteristiques(articleId);
    });
  }

  loadArticle(articleId: number): void {
    this.articlesService.getArticle(articleId).subscribe(
      (article: Article) => {
        this.article = article;
      },
      (error: any) => {
        console.error('Erreur lors du chargement de l\'article:', error);
      }
    );
  }

  loadCaracteristiques(articleId: number): void {
    this.caracteristiquesService.getCaracteristiquesByArticleId(articleId).subscribe(
      (caracteristiques: CaracteristiquesArticles[]) => {
        this.caracteristiques = caracteristiques;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des caractéristiques:', error);
      }
    );
  }
  ajouterAuPanier(article: Article) {
    this.panierservice.ajouterArticle(article);
  }
}


