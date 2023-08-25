import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSnackComponent } from './open-snack.component';

describe('OpenSnackComponent', () => {
  let component: OpenSnackComponent;
  let fixture: ComponentFixture<OpenSnackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenSnackComponent]
    });
    fixture = TestBed.createComponent(OpenSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
