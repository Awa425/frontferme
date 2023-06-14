import { Injectable } from '@angular/core';
import { Veterinaire } from '../models/veterinaire.modele';

@Injectable({
  providedIn: 'root',
})
export class VeterinaireService {
  veterinaires: Veterinaire[];
  veterinaire!: Veterinaire;

  constructor() {
    this.veterinaires = [
      {
        id: 1,
        nom: 'Dia',
        prenom: 'Baba',
        login: 'vet2',
        password: '123',
        adresse: 'pikine',
        pays: 'Senegal',
        telephone: '002215670000',
        isEtat: true,
        dateCreation: new Date('01/14/2011'),
      },
      {
        id: 2,
        nom: 'Ndiaye',
        prenom: 'Abdou',
        login: 'vet3',
        password: '123',
        adresse: 'pikine',
        pays: 'Senegal',
        telephone: '002215670000',
        isEtat: true,
        dateCreation: new Date('01/14/2011'),
      },
    ];
  }

  listVeterinaires() {
    return this.veterinaires;
  }

  addVeterinaire(Veterinaire: Veterinaire) {
    this.veterinaires.push(Veterinaire);
  }

  updateVeterinaire(v: Veterinaire) {
    this.deleteVeterinaire(v);
    this.addVeterinaire(v);
  }

  deleteVeterinaire(vet: Veterinaire) {
    const index = this.veterinaires.indexOf(vet, 0);
    if (index > -1) {
      this.veterinaires.splice(index, 1);
    }
    //ou Bien
    /* this.Veterinaires.forEach((cur, index) => {
    if(prod.idVeterinaire === cur.idVeterinaire) {
    this.Veterinaires.splice(index, 1);
    }
    }); */
  }

  detailVeterinaire(id: number): Veterinaire {
    this.veterinaire = this.veterinaires.find((p) => p.id == id)!;
    return this.veterinaire;
  }

  // trierVeterinaire() {
  //   this.veterinaires = this.veterinaires.sort((n1, n2) => {
  //     if (n1.id > n2.id) {
  //       return 1;
  //     }
  //     if (n1.id < n2.id) {
  //       return -1;
  //     }
  //     return 0;
  //   });
    
  // }
}
