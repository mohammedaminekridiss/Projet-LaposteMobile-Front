import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/Prospect';
import { ProspectService } from 'src/app/services/prospect.service';
import { Validators } from '@angular/forms';

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
    if (this.prospect.nom === '' || this.prospect.prenom === ''  || this.prospect.depNaissance === ''|| this.prospect.email === ''|| !this.prospect.IdCivilite  ) {
    } else {
      // Récupérez l'ID de l'offre sélectionnée depuis le LocalStorage
      const idsouscription = localStorage.getItem('id_souscription');
      this.prospectservice.createprospect(this.prospect, idsouscription).subscribe();
      this.router.navigate(['/livraison'], { 
        state: { 
          prospect: this.prospect,
          }
      });
    }
  
  }
 

 
  validateNumberInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
      if (!/^[0-9]+$/.test(inputChar)) {
      event.preventDefault(); 
    }
  }
  isNameValid(): boolean {
    const namePattern = /^[a-zA-Z]+$/;
    return namePattern.test(this.prospect.nom);
  }
  isprenomValid(): boolean {
    const namePattern = /^[a-zA-Z]+$/;
    return namePattern.test(this.prospect.prenom);
  }
  isEmailValid(email: string): boolean {
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
 


}



