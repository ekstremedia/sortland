import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbusinessesComponent } from './allbusinesses.component';

describe('AllbusinessesComponent', () => {
  let component: AllbusinessesComponent;
  let fixture: ComponentFixture<AllbusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
