import { AuthService } from './../../../shared/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from 'src/shared/services/support.service';
import { Support } from '../../../shared/models/support.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @Input() hiddenTitle: boolean;
  formFaq: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private supportService: SupportService,
    public authService : AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formFaq = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      organizationName: [null, Validators.required],
      appRefId: ['policiafederal'],
      captchaValue: [null, Validators.required],
      fone: [null],
      doubt: [null, Validators.required],
      receiveCall: [false],
      receiveEmail: [false],
    })

    this.authService.userObserver.subscribe(userData => {
      this.formFaq.get('name').setValue(userData.name);
      this.formFaq.get('email').setValue(userData.email);
      this.formFaq.get('organizationName').setValue(userData.organization.name);
    })
  }

  submitForm() {
    if(this.formFaq.valid){
      const support: Support = Support.fromJson(this.formFaq.value);
      this.supportService.create(support).subscribe(
        support => this.actionsForSuccess(support),
        error => this.actionsForError(error)
      )
    }
  }

  private actionsForSuccess(support){
    console.log("Email enviado com sucesso!", support);
  }

  private actionsForError(error){
    console.log("Erro ao enviar o e-mail!", error);
  }

}
