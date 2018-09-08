import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedigestillingerComponent } from './ledigestillinger.component';

describe('LedigestillingerComponent', () => {
  let component: LedigestillingerComponent;
  let fixture: ComponentFixture<LedigestillingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedigestillingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedigestillingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
