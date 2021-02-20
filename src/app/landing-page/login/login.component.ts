import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  currentAction: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.setCurrentAction()
  }

  
  private setCurrentAction(){
    
    if(this.route.snapshot.url[1]?.path == "logout"){
      this.currentAction = "logout";
    } else if(this.route.snapshot.url[1]?.path == "recover") {
      this.currentAction = "recover";
    } else {
      this.currentAction = "login"
    }
    
  }
  
  private redirecTo(page){
    this.router.navigate([page])
  }

}
