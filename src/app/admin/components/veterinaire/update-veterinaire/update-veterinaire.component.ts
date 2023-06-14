import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { VeterinaireService } from 'src/app/services/veterinaire.service';

@Component({
  selector: 'app-update-veterinaire',
  templateUrl: './update-veterinaire.component.html',
  styleUrls: ['./update-veterinaire.component.scss'],
})
export class UpdateVeterinaireComponent implements OnInit {
  curentVeterinaire = new Veterinaire();

  constructor(
    private veterinaireService: VeterinaireService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.curentVeterinaire = this.veterinaireService.detailVeterinaire(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateVeterinaire() {
    this.veterinaireService.updateVeterinaire(this.curentVeterinaire);
    this.router.navigate(['/admin/veterinaires']);
  }
}
