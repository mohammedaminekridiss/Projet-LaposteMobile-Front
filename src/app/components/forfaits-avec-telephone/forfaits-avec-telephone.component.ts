import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreEngagement } from 'src/app/models/Offreengagement';
import { OffreengagementService } from 'src/app/services/offreengagement.service';

@Component({
  selector: 'app-forfaits-avec-telephone',
  templateUrl: './forfaits-avec-telephone.component.html',
  styleUrls: ['./forfaits-avec-telephone.component.css']
})
export class ForfaitsAvecTelephoneComponent {
  offres: OffreEngagement[] = [];  // Déclaration sans initialisation

   
  constructor(
    private offreengagementservice: OffreengagementService,
   ) {}

  ngOnInit(): void {
    this.loadoffres();
  }

  loadoffres() {
    const offresObservable: Observable<OffreEngagement[]> = this.offreengagementservice.getoffres();
  
    offresObservable.subscribe(
      (data: OffreEngagement[]) => {
        this.offres = data.filter(offre => offre.dureeEngagement ===2 );
        console.log(data);
      },
      (error: any) => {  
        console.error('Error loading offres:', error);
      }
    );
  }
}
