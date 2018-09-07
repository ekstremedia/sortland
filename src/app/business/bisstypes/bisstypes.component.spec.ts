import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisstypesComponent } from './bisstypes.component';

describe('BisstypesComponent', () => {
  let component: BisstypesComponent;
  let fixture: ComponentFixture<BisstypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisstypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisstypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
