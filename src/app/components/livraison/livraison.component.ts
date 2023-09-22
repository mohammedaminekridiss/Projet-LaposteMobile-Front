import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from 'src/app/models/Adresse';
import { ModeLivraison } from 'src/app/models/Modelivraison';
import { Prospect } from 'src/app/models/Prospect';
import { AdresseService } from 'src/app/services/adresse.service';
import { ModelivraisonService } from 'src/app/services/modelivraison.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {
  prospect: any;
   modesLivraison: ModeLivraison[] = [];
  modelivraison : ModeLivraison= {
    idModeLivraison:0,
    libelleModeLivraison:'',
    prixLivraison:0

  }
  idDuModeSelectionne: number =0;

  constructor(private router : Router , private panierservice: PanierService , private adresseservice: AdresseService ,private route: ActivatedRoute,private livraisonService: ModelivraisonService) {
    const navigationState = window.history.state;
    if (navigationState) {
      if (navigationState.prospect) {
        this.prospect = navigationState.prospect;
            }
    }
    
  }
  adresse : Adresse = {
     Numero:  '',
    Voie:  '',
    Ville:'',
    Codepostal: '',
    AdresseComp:'',
  }
  ngOnInit(): void {
    this.load();

  }
  load() {
    this.livraisonService.getlivraison().subscribe(
      (data: ModeLivraison[]) => {
        this.modesLivraison = data;
        console.log(data);
    },
      (error: any) => { // Spécifiez explicitement le type de 'error'
        console.error('Error loading livraison:', error);
      }
    );
  }
 afficherRecapCoordonnees = false;
 validerCliquer = false;
 valideradresse() {
  this.validerCliquer = true;
  if (this.adresse.Codepostal === '' || this.adresse.Ville === '' || this.adresse.Numero === '' || this.adresse.Voie === '' || this.adresse.AdresseComp === '') {
  } else {
    this.adresseservice.createadresse(this.adresse).subscribe(() => {
       this.afficherRecapCoordonnees = true;
    });
  }
}



  validateNumberInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
      if (!/^[0-9]+$/.test(inputChar)) {
      event.preventDefault(); 
    }
  }
  public boutonClique = false;
  selectChoixLivraison(modelivraison:ModeLivraison) {
    this.boutonClique = true;
   this.idDuModeSelectionne = modelivraison.idModeLivraison;
     const prix= modelivraison.prixLivraison;
     console.log(this.idDuModeSelectionne,prix);

   
   }
   validerCommande(modeLivraison: ModeLivraison) {
    const idDuModeSelectionne = this.idDuModeSelectionne;
    const prix = modeLivraison.prixLivraison;
    console.log("ID du mode sélectionné :", idDuModeSelectionne);
    console.log("idmodelivraison :", modeLivraison.idModeLivraison);  
    this.panierservice.modifierSouscriptionAvecModeLivraison(modeLivraison.idModeLivraison,idDuModeSelectionne);
    this.router.navigate(['/paiement']);

    }
    naviguerVersErreur() {
       localStorage.clear();
    
       this.router.navigate(['/erreur_expire']);
    }
    
  
  
  

}
