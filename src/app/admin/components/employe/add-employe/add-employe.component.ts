import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/models/employe.modele';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss'],
})
export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();

  constructor(private employeService: EmployeService, private router: Router) {}

  ngOnInit(): void {}

  addEmploye() {
    this.employeService.addEmploye(this.newEmploye);
    this.router.navigate(['/admin/employes']);
  }
}
