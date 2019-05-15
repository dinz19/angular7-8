import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfyComponent } from './infy.component';

describe('InfyComponent', () => {
  let component: InfyComponent;
  let fixture: ComponentFixture<InfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
