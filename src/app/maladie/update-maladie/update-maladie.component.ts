import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-update-maladie',
  templateUrl: './update-maladie.component.html',
  styleUrls: ['./update-maladie.component.scss'],
})
export class UpdateMaladieComponent implements OnInit {
  curentMaladie: any;
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private maladieService: MaladieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((par: Params) => {
      const id = par['id'];
      this.maladieService.detailMaladie(id).subscribe((donnees) => {
        this.curentMaladie = donnees;
      });
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

    this.maladieService
      .updateMaladie(
        this.curentMaladie,
        this.activatedRoute.snapshot.params['id']
      )
      .subscribe((data) => {
        this.router.navigate(['/veterinaires']);
      });
    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }
}
