import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { AnimalServiceService } from 'src/app/services/animal-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.scss'],
})
export class ListAnimalComponent implements OnInit {
  animals!: Animal[];

  constructor(
    private animalService: AnimalServiceService,
    public authService: AuthService
  ) {
    // this.animals = animalService.listAnimal();
  }

  deleteAnimal(animal: Animal) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.animalService.deleteAnimal(animal);
    }
  }

  ngOnInit(): void {
    this.animalService.listAnimal().subscribe((anims) => {
      console.log(anims);

      this.animals = anims;
    });
  }
}
