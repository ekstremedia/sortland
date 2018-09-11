import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebutviklingComponent } from './webutvikling.component';

describe('WebutviklingComponent', () => {
  let component: WebutviklingComponent;
  let fixture: ComponentFixture<WebutviklingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebutviklingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebutviklingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
