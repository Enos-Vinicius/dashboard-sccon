import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { QGIS } from 'src/shared/models/qgis.model';
import { AuthService } from 'src/shared/services/auth.service';
import { QGISService } from 'src/shared/services/qgis.service';

@Component({
  selector: 'app-qgis',
  templateUrl: './qgis.component.html',
  styleUrls: ['./qgis.component.scss'],
  providers: [MessageService]
})
export class QgisComponent implements OnInit {

  qgisData: QGIS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QgisComponent>,
    private auth: AuthService,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private qgis: QGISService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if(!this.auth.isLogged()) {
      this.auth.openModalLogin();
    } else {
      this.getInfoQGIS();
    }    
  }


  closeModal(){
    this.dialogRef.close({res: "success"})
  }

  getInfoQGIS(){
    this.qgis.getByQGIS(this.auth.getUser()?.id, '/users-planet/users').subscribe(
      res => {
        this.qgisData = res;
      },
      err => {
        console.log("err: ", err);
      }
    )
  }

  copyText(val: string) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.messageService.add({severity:'success', summary: 'Item copiado com sucesso para área de transferência', life: 3000, closable: false});
  }

}
