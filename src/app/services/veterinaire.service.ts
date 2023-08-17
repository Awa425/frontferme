import { Injectable } from '@angular/core';
import { Veterinaire } from '../models/veterinaire.modele';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class VeterinaireService {
  private apiUrl = 'http://127.0.0.1:8000/api/veterinaires';
  // veterinaires: any[];
  veterinaire!: any;

  constructor(private http: HttpClient) {
    // this.veterinaires = [
    //   {
    //     id: 1,
    //     nom: 'Dia',
    //     prenom: 'Baba',
    //     login: 'vet2',
    //     password: '123',
    //     adresse: 'pikine',
    //     pays: 'Senegal',
    //     telephone: '002215670000',
    //     isEtat: true,
    //     dateCreation: new Date('01/14/2011'),
    //   },
    //   {
    //     id: 2,
    //     nom: 'Ndiaye',
    //     prenom: 'Abdou',
    //     login: 'vet3',
    //     password: '123',
    //     adresse: 'pikine',
    //     pays: 'Senegal',
    //     telephone: '002215670000',
    //     isEtat: true,
    //     dateCreation: new Date('01/14/2011'),
    //   },
    // ];
  }

  listVeterinaires(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addVeterinaire(veterinaire: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, veterinaire);
  }

  updateVeterinaire(body: any, id: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + id, body);
  }

  changeEtat(body: any, id: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + id, body);
  }

  detailVeterinaire(id: number): Observable<any> {
    // this.veterinaire = this.veterinaires.find((p) => p.id == id)!;
    // return this.veterinaire;
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

    //ou Bien
    /* this.Veterinaires.forEach((cur, index) => {
    if(prod.idVeterinaire === cur.idVeterinaire) {
    this.Veterinaires.splice(index, 1);
    }
    }); */
  // }

  // getOne(id: number): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:8000/api/commandes/' + id);
  // }

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
