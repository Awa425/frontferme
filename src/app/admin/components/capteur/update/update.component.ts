import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  curentCapteur!: any;
  fileDescription: any;

  constructor(
    private formBuilder: FormBuilder,
    private capteurService: CapteurService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      // type: ['', Validators.required],
      description: ['', Validators.required],
      fileDescription: ['', Validators.required],
    });

    this.activatedRoute.params.subscribe((par: Params) => {
      const id = par['id'];
      this.capteurService.detailCapteur(id).subscribe((donnees) => {
        this.curentCapteur = donnees;
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
      // alert('error');
      return;
    }

    this.capteurService
      .updateCapteur(
        this.curentCapteur,
        this.activatedRoute.snapshot.params['id']
      )
      .subscribe((data) => {
        if (data) {
          console.log('onSubmit', data);

          this.router.navigate(['/capteurs']);
        }
      });

    // console.log(JSON.stringify(this.addForm.value, null, 2));
  }

  // Test upload
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileDescription = file.name;
      // console.log('onFileSelect', this.fileDescription);
    }
  }
}
