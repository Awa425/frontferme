import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal.model';
import { AnimalServiceService } from 'src/app/services/animal-service.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.scss'],
})
export class UpdateAnimalComponent implements OnInit {
  currentAnimal = new Animal();
  idCurrentAnimal?: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.idCurrentAnimal = this.activatedRoute.snapshot.params['id'];
    this.currentAnimal = this.animalService.detailAnimal(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.currentAnimal);
    this.router.navigate(['admin/animals']);
  }
}
