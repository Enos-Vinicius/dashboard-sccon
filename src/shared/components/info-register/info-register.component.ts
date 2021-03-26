import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-register',
  templateUrl: './info-register.component.html',
  styleUrls: ['./info-register.component.scss']
})
export class InfoRegisterComponent implements OnInit {

  confirmData: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InfoRegisterComponent>,
  ) { }

  ngOnInit(): void {
 
  }

  acceptTerms() {
    this.confirmData = false;
  }

  closeModal(){
    this.dialogRef.close({res: "success"})
  }
}
