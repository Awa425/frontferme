import { Injectable } from '@angular/core';
import { Employe } from '../models/employe.modele';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  employes: Employe[];
  employe!: Employe;

  constructor() {
    this.employes = [
      {
        id: 1,
        nom: 'Dia',
        prenom: 'Baba',
        adresse: 'pikine',
        pays: 'Senegal',
        telephone: '002215670000',
        isEtat: true,
        matricule: '123',
        dateCreation: new Date('01/14/2011'),
      },
      {
        id: 2,
        nom: 'Ndiaye',
        prenom: 'Abdou',
        adresse: 'pikine',
        pays: 'Senegal',
        telephone: '002215670000',
        isEtat: true,
        matricule: '123',
        dateCreation: new Date('01/14/2011'),
      },
    ];
  }

  listEmployes() {
    return this.employes;
  }

  addEmploye(employe: Employe) {
    this.employes.push(employe);
  }

  deleteEmploye(an: Employe) {
    const index = this.employes.indexOf(an, 0);
    if (index > -1) {
      this.employes.splice(index, 1);
    }
    //ou Bien
    /* this.Employes.forEach((cur, index) => {
    if(prod.idEmploye === cur.idEmploye) {
    this.Employes.splice(index, 1);
    }
    }); */
  }

  updateEmploye(employe: Employe) {
    
    this.deleteEmploye(employe);
    this.addEmploye(employe);
  }

  detailEmploye(id: number): Employe {
    this.employe = this.employes.find((p) => p.id == id)!;
    return this.employe;
  }

  // alertUpdate(){
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Save',
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire('Saved!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //     }
  //   })
  // }
}
