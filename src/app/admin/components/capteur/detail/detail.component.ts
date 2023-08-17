import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  curentCapteur: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private capteurService: CapteurService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((par: Params) => {
      const id = par['id'];
      this.capteurService.detailCapteur(id).subscribe((donnees) => {
        this.curentCapteur = donnees;
        console.log(this.curentCapteur);
      });
    });
  }
}
