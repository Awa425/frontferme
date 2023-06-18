import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { VeterinaireService } from 'src/app/services/veterinaire.service';
import Validation from 'src/utils/validation';

@Component({
  selector: 'app-update-veterinaire',
  templateUrl: './update-veterinaire.component.html',
  styleUrls: ['./update-veterinaire.component.scss'],
})
export class UpdateVeterinaireComponent implements OnInit {
  curentVeterinaire: any;
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private veterinaireService: VeterinaireService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
        // confirmPassword: ['', Validators.required],
        adresse: ['', [Validators.required]],
        pays: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        // dateAt: ['', [Validators.required]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((par: Params) => {
      const id = par['id'];
      this.veterinaireService.detailVeterinaire(id).subscribe((donnees) => {
        this.curentVeterinaire = donnees;
      });
    });
  }

  updateVeterinaire() {
    this.veterinaireService
      .updateVeterinaire(
        this.curentVeterinaire,
        this.activatedRoute.snapshot.params['id']
      )
      .subscribe((data) => {
        this.router.navigate(['/admin/veterinaires']);
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addForm.controls;
  }

  get fg(): FormGroup {
    return this.addForm as FormGroup;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.veterinaireService
      .updateVeterinaire(
        this.curentVeterinaire,
        this.activatedRoute.snapshot.params['id']
      )
      .subscribe((data) => {
        this.router.navigate(['/admin/veterinaires']);
      });
    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }
}
