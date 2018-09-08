import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisscatComponent } from './bisscat.component';

describe('BisscatComponent', () => {
  let component: BisscatComponent;
  let fixture: ComponentFixture<BisscatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisscatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
