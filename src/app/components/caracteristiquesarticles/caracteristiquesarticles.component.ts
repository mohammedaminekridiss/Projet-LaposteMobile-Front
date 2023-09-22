import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  telephone: Article ; // Initialisez avec un objet Article vide ou avec les données appropriées

  constructor(
 
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private caracteristiquesService: CaracteristiquesarticlesService,
    private panierService: PanierService,
    private router:Router,

   ) {
    this.telephone = new Article(); // Initialisez avec un objet Article vide ou avec les données appropriées

  }
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
        this.telephone = article; // Initialisez 'telephone' avec l'article chargé
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
       }
    );
  }
  ajouteraupanier(telephone: Article ) {
    this.panierService.ajouteraupanier(telephone);
  }
  naviguerVerspanier() {
    this.router.navigate(['/panier']);
  }
 
}


