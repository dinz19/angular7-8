import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbuiltComponent } from './ibuilt.component';

describe('IbuiltComponent', () => {
  let component: IbuiltComponent;
  let fixture: ComponentFixture<IbuiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbuiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
