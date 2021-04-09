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

  public currentAction: string;
  public msgError = null;

  public loading = false;

  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.minLength(6), Validators.email, Validators.required, Validators.maxLength(60)])],
      password: [null],
    });
  }

  ngOnInit(): void {
    this.setCurrentAction()
  }

  private setCurrentAction() {
    if (this.data['action']) {
      this.currentAction = this.data['action'];
    } else {
      this.currentAction = 'login'
    }
  }

  public doLogin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.loading = false;
      return
    }

    this.msgError = null;
    this.loading = true;

    this.authService.doLogin(this.form.value).then(sucesso => {
      this.loading = false;
      this.dialogRef.close();
    }).catch(error => {
      this.loading = false;
      this.form.markAllAsTouched();

      if (error >= 300) {
        this.msgError = "Não foi possível realizar login com seus dados.<br> Por favor, verifique seu e-mail e senha.";
      } else {
        this.msgError = "Ocorreu um problema na comunicação com o servidor.<br> Por favor tente novamente."
      }
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
