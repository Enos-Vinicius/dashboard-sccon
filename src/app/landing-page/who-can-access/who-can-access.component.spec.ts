import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanAccessComponent } from './who-can-access.component';

describe('WhoCanAccessComponent', () => {
  let component: WhoCanAccessComponent;
  let fixture: ComponentFixture<WhoCanAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoCanAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCanAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
