import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-register',
  templateUrl: './info-register.component.html',
  styleUrls: ['./info-register.component.scss']
})
export class InfoRegisterComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InfoRegisterComponent>,
  ) { }

  ngOnInit(): void {
    console.log("Data: ", this.data.form);    
  }

}
