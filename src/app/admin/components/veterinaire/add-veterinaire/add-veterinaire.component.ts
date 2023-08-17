import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/models/veterinaire.modele';
import { VeterinaireService } from 'src/app/services/veterinaire.service';
import Validation from 'src/utils/validation';

@Component({
  selector: 'app-add-veterinaire',
  templateUrl: './add-veterinaire.component.html',
  styleUrls: ['./add-veterinaire.component.scss'],
})
export class AddVeterinaireComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private veterinaireService: VeterinaireService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required], 
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

  addVeterinaire() {
    this.veterinaireService
      .addVeterinaire(this.addForm.value)
      .subscribe((data) => {
        if (data) {
          // console.log(data);
          this.router.navigate(['/admin/veterinaires']);
        }
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
      .addVeterinaire(this.addForm.value)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.router.navigate(['/admin/veterinaires']);
        }
      });

    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }
}
