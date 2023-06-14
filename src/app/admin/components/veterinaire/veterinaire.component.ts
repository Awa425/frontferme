import { Component, OnInit } from '@angular/core';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { VeterinaireService } from 'src/app/services/veterinaire.service';

@Component({
  selector: 'app-veterinaire',
  templateUrl: './veterinaire.component.html',
  styleUrls: ['./veterinaire.component.scss'],
})
export class VeterinaireComponent implements OnInit {
  veterinaires: Veterinaire[];

  constructor(private veterinaireService: VeterinaireService) {
    this.veterinaires = this.veterinaireService.listVeterinaires();
  }

  ngOnInit(): void {}

  deleteVeterinaire(vet: Veterinaire) {
    this.veterinaireService.deleteVeterinaire(vet);
  }
}
