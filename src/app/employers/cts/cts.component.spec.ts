import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsComponent } from './cts.component';

describe('CtsComponent', () => {
  let component: CtsComponent;
  let fixture: ComponentFixture<CtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
