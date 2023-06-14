import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { VeterinaireService } from 'src/app/services/veterinaire.service';

@Component({
  selector: 'app-add-veterinaire',
  templateUrl: './add-veterinaire.component.html',
  styleUrls: ['./add-veterinaire.component.scss'],
})
export class AddVeterinaireComponent implements OnInit {
  newVeterinaire = new Veterinaire();
  constructor(
    private veterinaireService: VeterinaireService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addVeterinaire() {
    // console.log(this.newVeterinaire);
    this.veterinaireService.addVeterinaire(this.newVeterinaire);
    this.router.navigate(['/admin/veterinaires']);
  }
}
