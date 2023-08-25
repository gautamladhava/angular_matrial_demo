import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensheetComponent } from './opensheet.component';

describe('OpensheetComponent', () => {
  let component: OpensheetComponent;
  let fixture: ComponentFixture<OpensheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpensheetComponent]
    });
    fixture = TestBed.createComponent(OpensheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
