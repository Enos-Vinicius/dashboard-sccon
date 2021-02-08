import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSoftwareComponent } from './info-software.component';

describe('InfoSoftwareComponent', () => {
  let component: InfoSoftwareComponent;
  let fixture: ComponentFixture<InfoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
