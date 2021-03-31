import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCommonQuestionComponent } from './info-common-question.component';

describe('InfoCommonQuestionComponent', () => {
  let component: InfoCommonQuestionComponent;
  let fixture: ComponentFixture<InfoCommonQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCommonQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCommonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
