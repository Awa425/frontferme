import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  fileDescription: any;
  fileName = '';

  constructor(
    private formBuilder: FormBuilder,
    private capteurService: CapteurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      fileDescription: null,
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addForm.controls;
  }

  get fg(): FormGroup {
    return this.addForm as FormGroup;
    // this.addForm.
  }

  // onFileSelect
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.fileName = file.name;
  //   }
  // }

  onSubmit(): void {
    this.submitted = true;
    if (this.addForm.invalid) {
      alert('error');
      return;
    }

    this.capteurService.addCapteur(this.addForm.value).subscribe((data) => {
      if (data) {
        // console.log(data);
        this.router.navigate(['/capteurs']);
      }
    });

    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }

  //  upload file
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileDescription = file.name;
      console.log(this.fileDescription);
    }
  }
}
