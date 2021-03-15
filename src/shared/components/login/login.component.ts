import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentAction: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

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

}
