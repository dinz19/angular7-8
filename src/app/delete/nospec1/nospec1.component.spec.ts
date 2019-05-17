import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec1Component } from './nospec1.component';

describe('Nospec1Component', () => {
  let component: Nospec1Component;
  let fixture: ComponentFixture<Nospec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
