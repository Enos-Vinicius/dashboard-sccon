import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImagesMosaicsComponent } from './info-image-mosaics.component';

describe('InfoImagesMosaicsComponent', () => {
  let component: InfoImagesMosaicsComponent;
  let fixture: ComponentFixture<InfoImagesMosaicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImagesMosaicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImagesMosaicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
