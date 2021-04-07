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
      password: [null, Validators.compose([Validators.minLength(6),  Validators.required, Validators.maxLength(60)])],
    });
  }

  ngOnInit(): void {
    this.setCurrentAction(this.data['action'])
  }

  private setCurrentAction(action) {
    this.msgError = null;

    if (action == 'recover') {
      this.currentAction = action;
      this.form.get('password').clearValidators();
      this.form.get('password').updateValueAndValidity();
    } else if (action) {
      this.currentAction = action;
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
      console.log(sucesso);
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
    this.msgError = null;
    this.loading = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.loading = false;
      return
    }

    this.authService.doRecovery(this.form.get('username').value).subscribe(retorno => {
      this.loading = false;
      this.setCurrentAction('recoverSuccess');
    }, error => {
      this.loading = false;
      this.msgError = "Não foi possível solicitar a recuperação de senha.<br> Verifique se seu e-mail está correto ou tente novamente mais tarde.";
    });
  }

  public doSinespLogin() {
    window.location.href = "https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf?goto=BRMAIS_SIMAR";
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
