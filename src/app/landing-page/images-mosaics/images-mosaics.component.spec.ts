import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesMosaicsComponent } from './images-mosaics.component';

describe('ImagesMosaicsComponent', () => {
  let component: ImagesMosaicsComponent;
  let fixture: ComponentFixture<ImagesMosaicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesMosaicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesMosaicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
