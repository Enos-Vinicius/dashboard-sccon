import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QgisComponent } from './qgis.component';

describe('QgisComponent', () => {
  let component: QgisComponent;
  let fixture: ComponentFixture<QgisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QgisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QgisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
