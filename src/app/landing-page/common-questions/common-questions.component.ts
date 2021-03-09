import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonQuestions } from 'src/shared/models/common-questions.model';
import { CommonQuestionsService } from 'src/shared/services/common-questions.service';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss']
})
export class CommonQuestionsComponent implements OnInit {

  commonQuestions: CommonQuestions[] = [];
  inputQuestion: FormControl;

  constructor(
    private common: CommonQuestionsService
  ) { }

  ngOnInit(): void {
    this.getCommon();
    this.buildForm();
  }

  getCommon(){
    this.common.getAll().subscribe(
      (data) => {
        this.commonQuestions = data;
      }, 
      (err) => {
        console.log("error", err);
      }
    )
  }

  buildForm() {
    this.inputQuestion = new FormControl('');
  }

}
