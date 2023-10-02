import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ForfaitsComponent } from './components/forfaits/forfaits.component';
import { TelephonesComponent } from './components/telephones/telephones.component';
 import { BoxinternetComponent } from './components/boxinternet/boxinternet.component';
import { PanierComponent } from './components/panier/panier.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CaracteristiquesarticlesComponent } from './components/caracteristiquesarticles/caracteristiquesarticles.component';
import { ForfaitsSansEngagementComponent } from './components/forfaits-sans-engagement/forfaits-sans-engagement.component';
import { ForfaitsAvecTelephoneComponent } from './components/forfaits-avec-telephone/forfaits-avec-telephone.component';
import { CordonneesComponent } from './components/cordonnees/cordonnees.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ErreurExpireComponent } from './components/erreur-expire/erreur-expire.component';
import { AppComponent } from './app.component';
  

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirection vers '/home'

    { path: 'forfaits', component: ForfaitsComponent },
  { path: 'telephone', component: TelephonesComponent },
   {path : 'boxinternet' , component: BoxinternetComponent},
   {path : 'panier' , component: PanierComponent},
   {path : 'accueil' , component: AccueilComponent},
   {path: 'caracteristiquesarticle/:id' , component: CaracteristiquesarticlesComponent},
   {path :'forfaits-sans-engagement' ,  component: ForfaitsSansEngagementComponent},
   {path :'forfaits-mobiles' ,  component: ForfaitsAvecTelephoneComponent},
   {path : 'coordonnees' , component: CordonneesComponent},
   {path : 'livraison' , component: LivraisonComponent},
   {path : 'paiement' , component: PaiementComponent},
   {path : 'erreur_expire' , component: ErreurExpireComponent}






 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
