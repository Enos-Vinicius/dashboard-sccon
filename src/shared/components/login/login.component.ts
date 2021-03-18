import { AuthService } from './../../services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentAction: string;

  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.minLength(6), Validators.required, Validators.maxLength(60)])],
      password: [null],
    });
  }

  ngOnInit(): void {
    this.setCurrentAction()
  }

  private setCurrentAction() {
    console.log(this.data['action']);

    if (this.data['action']) {
      this.currentAction = this.data['action'];
    } else {
      this.currentAction = 'login'
    }
  }

  public doLogin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    this.authService.login(this.form.value).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  public doRecovery() {

  }

  public doSinespLogin() {
    window.location.href = "https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf?goto=BRMAIS_SIMAR";
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
