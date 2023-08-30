import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 import { ForfaitsComponent } from './components/forfaits/forfaits.component';
import { TelephonesComponent } from './components/telephones/telephones.component';
 import { AppRoutingModule } from './app-routing.module';
import { BoxinternetComponent } from './components/boxinternet/boxinternet.component';
 import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanierComponent } from './components/panier/panier.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { CaracteristiquesarticlesComponent } from './components/caracteristiquesarticles/caracteristiquesarticles.component';
import { ForfaitsSansEngagementComponent } from './components/forfaits-sans-engagement/forfaits-sans-engagement.component';
import { ForfaitsAvecTelephoneComponent } from './components/forfaits-avec-telephone/forfaits-avec-telephone.component';
 
@NgModule({
  declarations: [
    AppComponent,
     ForfaitsComponent,
    TelephonesComponent,
     BoxinternetComponent,
     HeaderComponent,
    FooterComponent,
    PanierComponent,
    AccueilComponent,
    CaracteristiquesarticlesComponent,
    ForfaitsSansEngagementComponent,
    ForfaitsAvecTelephoneComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
