import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreEngagement } from 'src/app/models/Offreengagement';
import { OffreengagementService } from 'src/app/services/offreengagement.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-forfaits-sans-engagement',
  templateUrl: './forfaits-sans-engagement.component.html',
  styleUrls: ['./forfaits-sans-engagement.component.css']
})
export class ForfaitsSansEngagementComponent {
  
  offres: OffreEngagement[] = [];  // Déclaration sans initialisation

   
  constructor(
    private offreengagementservice: OffreengagementService,
    private panierService: PanierService,

   ) {}

  ngOnInit(): void {
    this.loadoffres();
  }

  loadoffres() {
    const offresObservable: Observable<OffreEngagement[]> = this.offreengagementservice.getoffres();
  
    offresObservable.subscribe(
      (data: OffreEngagement[]) => {
        this.offres = data.filter(offre => offre.dureeEngagement === 0);
        console.log(data);
      },
      (error: any) => {  
        console.error('Error loading offres:', error);
      }
    );
  }
  ajouterAuPanier(offre: OffreEngagement) {
    this.panierService.ajouterOffre(offre);
  }
  
  
  }
  
  
  
  
