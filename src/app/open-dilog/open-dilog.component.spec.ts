import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDilogComponent } from './open-dilog.component';

describe('OpenDilogComponent', () => {
  let component: OpenDilogComponent;
  let fixture: ComponentFixture<OpenDilogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenDilogComponent]
    });
    fixture = TestBed.createComponent(OpenDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
