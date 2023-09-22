import { CaracteristiquesArticles } from './CaracteristiquesArticles';
export class Article {

    idArticle: number= 0;
    IdTypeArticle: number=0 ; 
    CodeSap:String='' ;
    libelleArticle:String='' ;
    Ordre: number=0 ;
    FichierImageVignette:String='' ;
    fichierImage:String='' ;
    LibelleCourt:String='' ;
    IdFabriquant: number=0 ;
    DateFinCcial: Date | null = null;
    caracteristiquesArticles: CaracteristiquesArticles[] = [];
}