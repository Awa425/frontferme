import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-add-maladie',
  templateUrl: './add-maladie.component.html',
  styleUrls: ['./add-maladie.component.scss'],
})
export class AddMaladieComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private maladieService: MaladieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
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

    this.maladieService.addMaladie(this.addForm.value).subscribe((data) => {
      if (data) {
        console.log(data);
        this.router.navigate(['/maladies']);
      }
    });

    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }
}
