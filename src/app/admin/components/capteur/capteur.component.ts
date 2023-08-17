import { Component, OnInit } from '@angular/core';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-capteur',
  templateUrl: './capteur.component.html',
  styleUrls: ['./capteur.component.scss'],
})
export class CapteurComponent implements OnInit {
  capteurs: any;
  etat: any;

  constructor(private capteurService: CapteurService) {}

  ngOnInit(): void {
    this.capteurService.listCapteurs().subscribe((donnee) => {
      this.capteurs = donnee['hydra:member'];
      // console.log(this.capteurs);
    });
  }

  changeEtat(id: number) {
    this.etat = { isEtat: false };
    this.capteurService.updateCapteur(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }

  activer(id: number) {
    this.etat = { isEtat: true };
    this.capteurService.updateCapteur(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }
}
