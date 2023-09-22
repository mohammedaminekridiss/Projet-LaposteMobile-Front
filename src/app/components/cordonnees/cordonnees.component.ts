import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/Prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-cordonnees',
  templateUrl: './cordonnees.component.html',
  styleUrls: ['./cordonnees.component.css']
})
export class CordonneesComponent {
 
  constructor(private prospectservice: ProspectService,private router : Router) {  
    }
  prospect: Prospect = {
    IdCivilite: 0,
    IdSouscription: 0,
    IdAdresseFacturation: 0,
    IdAdresseLivraison: 0,
    IdModepaiementSouscription: 0,
    nom: '',
    prenom: '',
    dateNaissance: new Date(),
    depNaissance: '',
    DatCre: new Date(),
    DatMod: new Date(),
    IdCoordonneesBancaires: 0,
    email: '',
    numeroFixe: '',
    numeroMobile: '',
  };
  ngOnInit() {

  }
  validerClique = false;

  validerprospect() {
    this.validerClique = true;
    if (this.prospect.nom === '' || this.prospect.prenom === ''  || this.prospect.depNaissance === ''|| this.prospect.email === '') {
    } else {
      // Récupérez l'ID de l'offre sélectionnée depuis le LocalStorage
      const idsouscription = localStorage.getItem('id_souscription');
      this.prospectservice.createprospect(this.prospect, idsouscription).subscribe();
    }
  
  }
  validateNumberInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
  
    // Vérifiez si le caractère saisi n'est pas un chiffre (0-9)
    if (!/^[0-9]+$/.test(inputChar)) {
      event.preventDefault(); // Empêche l'entrée du caractère non numérique
    }
  }
  passerAuLivraison() {
    this.router.navigate(['/livraison'], { 
      state: { 
        prospect: this.prospect,
        }
    });
    
  }
  



}



