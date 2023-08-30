import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { CaracteristiquesArticles } from 'src/app/models/CaracteristiquesArticles';
import { ArticlesService } from 'src/app/services/articles.service';
import { CaracteristiquesarticlesService } from 'src/app/services/caracteristiquesarticles.service';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: []
})
export class TelephonesComponent {
  articles: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private caracteristiquesService: CaracteristiquesarticlesService
  ) {}

  ngOnInit(): void {
    this.loadArticles();
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
