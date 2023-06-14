import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal.model';
import { AnimalServiceService } from 'src/app/services/animal-service.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss'],
})
export class AddAnimalComponent implements OnInit {
  newAnimal = new Animal();

  constructor(
    private animalService: AnimalServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addAnimal() {
    this.animalService.addAnimal(this.newAnimal);
    this.router.navigate(['/admin/animals']);
    // console.log(this.newAnimal);
  }
}
