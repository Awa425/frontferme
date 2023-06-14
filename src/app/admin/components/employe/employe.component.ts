import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employe.modele';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent implements OnInit {
  employes: Employe[];

  constructor(
    private employeService: EmployeService,
    public authService: AuthService
  ) {
    this.employes = this.employeService.listEmployes();
  }

  ngOnInit(): void {}

  deleteEmploye(em: Employe) {
    this.employeService.deleteEmploye(em);
  }
}
