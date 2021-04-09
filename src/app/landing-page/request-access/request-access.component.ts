import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { InfoRegisterComponent } from 'src/shared/components/info-register/info-register.component';
import { CityService } from 'src/shared/services/city.service';
import { EmploymentsService } from 'src/shared/services/employments.service';
import { StateService } from 'src/shared/services/state.service';
import { ValidateEmailService } from 'src/shared/services/validate-email.service';
import { WorkService } from 'src/shared/services/work.service';
import { Helper } from 'src/shared/utils/Helper';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss'],
  providers: [MessageService]
})
export class RequestAccessComponent implements OnInit {

  items: MenuItem[];
  formAccess: FormGroup;
  activeIndex: number = 0;
  stateArr;
  cityArr = [];
  workArr = [];
  employmentsArr = [];
  viewCriterion: boolean = false;
  viewCity: boolean = false;

  constructor(
    private validateEmail: ValidateEmailService,
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private workService: WorkService,
    private dialog: MatDialog,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private employmentsService: EmploymentsService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.loadSteps();
    this.buildForm();
    this.stateArr = this.stateService.getStates();
  }

  buildForm(){
    this.formAccess = this.formBuilder.group({
      name: [null],
      email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      confirm_email: [null, [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      stocking_unit: [null],
      appRefId: ['policiafederal'],
      state: [null],
      fone: [null],
      county: [null],
      work: [false],
      employments: [false],
    });

    const { county } = this.formAccess.controls;

    if(!this.viewCity) {
      county.disable();
    } 
  }

  loadSteps(){
    this.items = [{
      label: 'Email Institucional',
    },
    {
      label: 'Ficha Cadastral',
    },
    {
      label: 'Cadastro Concluído',
    }];
  }

  next(){
    if(this.activeIndex < 2) {
      this.activeIndex ++; 
    }
  }

  back(){
    this.validarRequiredForm('none');
    if(this.activeIndex > 0) {
      this.activeIndex --; 
    }
  }

  validEmail() {
    let email = this.formAccess.get('email').value;
    this.validateEmail.getByString(email).subscribe(
      res => {
        this.next();
        this.validarRequiredForm('validate');
        this.getWork();
        this.getEmployments();
        this.viewCriterion = false;
      }, 
      err => {
        this.viewCriterion = true;
      })
  }

  validEmailSecondary(){
    const email = this.formAccess.get('email').value;
    const confirmEmail = this.formAccess.get('confirm_email').value;
    if(email != confirmEmail){
      this.formAccess.get('confirm_email').setErrors({errorEmail: true})
    } else {
      this.formAccess.get('confirm_email').setErrors(null)
    }
    
  }

  setCity(code){
    this.cityService.getByString(code + '/cities').subscribe (
      res => {
        this.cityArr = res;
        this.viewCity = true;
        this.formAccess.get('county').enable();
      },
      err => {
        console.log("Erro");
        this.viewCity = false;
      }
    )
  }

  getWork(){
    this.workService.getAll().subscribe(
      res => {
        this.workArr = res;
      },
      err => {
        console.log("Error, ", err);
      }
    )
  }

  getEmployments(){
    this.employmentsService.getAll().subscribe(
      res => {
        this.employmentsArr = res;
      }, 
      err => {
        console.log("Err::> ", err);
      }
    )
  }

  validarRequiredForm(option) {
    if(option == 'validate'){
      Object.keys(this.formAccess.controls).forEach(key => {
        this.formAccess.controls[key].setValidators(Validators.required);       
      });
    } else {
      Object.keys(this.formAccess.controls).forEach(key => {
        if(key != 'email'){
          this.formAccess.controls[key].setValidators(null);
        }
      });
    }
  }

  public openModal() {
    const dialogRef = this.dialog.open(InfoRegisterComponent, Helper.checkMobile() ? {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw',
      data: {form : this.formAccess.value, select: this.filterDataSelect()}
    } : {
      minWidth: '25vw',
        data: {form : this.formAccess.value, select: this.filterDataSelect()}
      },
    );

    dialogRef.afterClosed().subscribe(res => {
      if(res.res === 'success'){
        // this.messageService.add({severity:'success', summary: 'Solicitação concluída com sucesso', life: 3000, closable: false});
        this.next();
      }   
    })

  }

  filterDataSelect(){
    let data = {
      state: this.searchValue(this.stateArr ,this.formAccess.get('state').value),
      work: this.searchValue(this.workArr ,this.formAccess.get('work').value),
      employment: this.searchValue(this.employmentsArr ,this.formAccess.get('employments').value),
      city: this.searchValue(this.cityArr ,this.formAccess.get('county').value)
    }

    return data;
  }

  searchValue(arr, value){
    const result = arr.filter((res) => { return res.id === parseInt(value) })
    return result[0];
  }
}
