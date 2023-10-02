import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  constructor(private router : Router){

  }
  naviguerVersErreur() {
    localStorage.clear();
 
    this.router.navigate(['/erreur_expire']);
 }
 
}
