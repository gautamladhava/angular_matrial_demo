import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpernBgDilogComponent } from './opern-bg-dilog.component';

describe('OpernBgDilogComponent', () => {
  let component: OpernBgDilogComponent;
  let fixture: ComponentFixture<OpernBgDilogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpernBgDilogComponent]
    });
    fixture = TestBed.createComponent(OpernBgDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
