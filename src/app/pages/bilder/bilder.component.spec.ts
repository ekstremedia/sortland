import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilderComponent } from './bilder.component';

describe('BilderComponent', () => {
  let component: BilderComponent;
  let fixture: ComponentFixture<BilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
