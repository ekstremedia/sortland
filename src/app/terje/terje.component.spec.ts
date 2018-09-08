import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerjeComponent } from './terje.component';

describe('TerjeComponent', () => {
  let component: TerjeComponent;
  let fixture: ComponentFixture<TerjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
