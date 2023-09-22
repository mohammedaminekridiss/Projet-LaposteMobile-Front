export class Prospect { 
    IdCivilite: number=0;
    IdSouscription: number=0
    IdAdresseFacturation: number=0  
    IdAdresseLivraison: number=0 
    IdModepaiementSouscription: number=0;
    nom: string='';
    prenom: string='';
    dateNaissance: Date=new Date();
    depNaissance: string='';
    DatCre: Date=new Date();
    DatMod: Date=new Date();
    IdCoordonneesBancaires: number=0;
    email: string='';
    numeroFixe: string='';
    numeroMobile: string='';
}