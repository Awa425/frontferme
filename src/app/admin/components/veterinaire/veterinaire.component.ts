import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { AuthService } from 'src/app/services/auth.service';
import { VeterinaireService } from 'src/app/services/veterinaire.service';

@Component({
  selector: 'app-veterinaire',
  templateUrl: './veterinaire.component.html',
  styleUrls: ['./veterinaire.component.scss'],
})
export class VeterinaireComponent implements OnInit {
  veterinaires: any[] = [];
  etat: any;

  constructor(
    private veterinaireService: VeterinaireService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.veterinaireService.listVeterinaires().subscribe((donnee) => {
      this.veterinaires = donnee['hydra:member'];
      // console.log(this.veterinaires);
    });
  }

  changeEtat(id: number) {
    this.etat = { isEtat: false };
    this.veterinaireService.changeEtat(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }
  activer(id: number) {
    this.etat = { isEtat: true };
    this.veterinaireService.changeEtat(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }
}
