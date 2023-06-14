import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AnimalServiceService {
  apiURL: string = 'http://localhost:8000/api/animals';
  animals: Animal[];
  animal!: Animal;

  constructor(private http: HttpClient) {
    this.animals = [
      {
        id: 1,
        nom: 'animal 2',
        age: 2,
        // etat: true,
        dateAt: new Date('01/14/2011'),
      },
    ];
  }

  listAnimal(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL);

    // return this.animals;
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  deleteAnimal(an: Animal) {
    //supprimer le animal prod du tableau animals
    const index = this.animals.indexOf(an, 0);
    if (index > -1) {
      this.animals.splice(index, 1);
    }
    //ou Bien
    /* this.animals.forEach((cur, index) => {
    if(prod.idanimal === cur.idanimal) {
    this.animals.splice(index, 1);
    }
    }); */
  }

  detailAnimal(id: number): Animal {
    this.animal = this.animals.find((p) => p.id == id)!;
    return this.animal;
  }

  updateAnimal(animal: Animal) {
    this.deleteAnimal(animal);
    this.addAnimal(animal);
  }

  // trierAnimals(){
  //   this.animals = this.animals.sort((n1,n2) => {
  //   if (n1.idAnimal > n2.idAnimal) {
  //   return 1;
  //   }
  //   if (n1.idProduit < n2.idProduit) {
  //   return -1;
  //   }
  //   return 0;
  //   });
  //   }
}
