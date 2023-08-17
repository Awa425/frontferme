import { Component, OnInit } from '@angular/core';
import { MaladieService } from '../services/maladie.service';

@Component({
  selector: 'app-maladie',
  templateUrl: './maladie.component.html',
  styleUrls: ['./maladie.component.scss'],
})
export class MaladieComponent implements OnInit {
  maladies: any;
  etat: any;

  constructor(private maladieService: MaladieService) {}

  ngOnInit(): void {
    this.maladieService.listMaladies().subscribe((donnee) => {
      this.maladies = donnee['hydra:member'];
      // console.log(this.capteurs);
    });
  }

  changeEtat(id: number) {
    this.etat = { isEtat: false };
    this.maladieService.updateMaladie(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }

  activer(id: number) {
    this.etat = { isEtat: true };
    this.maladieService.updateMaladie(this.etat, id).subscribe((data) => {
      if (data) {
        window.location.reload();
      }
    });
  }
}
