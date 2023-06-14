import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe.modele';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-update-update-employe',
  templateUrl: './update-update-employe.component.html',
  styleUrls: ['./update-update-employe.component.scss'],
})
export class UpdateUpdateEmployeComponent implements OnInit {
  curentEmploye = new Employe();

  constructor(
    private employeService: EmployeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.curentEmploye = this.employeService.detailEmploye(
      this.activatedRoute.snapshot.params['id']
    );
  }

  updateEmploye() {
    this.employeService.updateEmploye(this.curentEmploye);
    this.router.navigate(['/admin/employes']);
  }
}
