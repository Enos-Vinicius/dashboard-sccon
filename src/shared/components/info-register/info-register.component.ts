import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthRegister } from 'src/shared/models/auth-register.model';
import { AuthRegisterService } from 'src/shared/services/auth-register.service';

@Component({
  selector: 'app-info-register',
  templateUrl: './info-register.component.html',
  styleUrls: ['./info-register.component.scss']
})
export class InfoRegisterComponent implements OnInit {

  confirmData: boolean = true;
  formTerms: FormGroup;
  viewForm = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private authRegister: AuthRegisterService,
    public dialogRef: MatDialogRef<InfoRegisterComponent>,
  ) { 
    this.formTerms = this.formBuilder.group({
      acceptedTerm: [{version: "eula_teste.pdf"}],
      captchaValue: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewForm = true;
    }, 1000);
    
  }
  acceptTerms(){
    this.confirmData = false;
  }

  postAutoRegister() {
    let objPost = {
      acceptedTerm: {version: "eula_teste.pdf"},
      captchaValue: this.formTerms.get('captchaValue').value,
      user: {
        allowedIps: [],
        checkEmail: this.data.form.confirm_email,
        email: this.data.form.email,
        employment: this.data.select.employment,
        name: this.data.form.name,
        organization: {id: "46e91df5-80eb-490d-be5e-f94db64d1146"},
        phone: this.data.form.fone,
        workAddress: {city: this.data.select.city, state: this.data.select.state},
        workFunction: this.data.select.work,
        workUnit: this.data.form.stocking_unit
      }
    }
    const auth: AuthRegister = AuthRegister.fromJson(objPost); 
    this.authRegister.create(auth).subscribe(
      res => {
        this.dialogRef.close({res: "success"})
      },
      err => {
        this.dialogRef.close({res: "success"})
      })

  }

  closeModal(){
    this.dialogRef.close({res: "close"})
  }
}
