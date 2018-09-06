import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbissComponent } from './addbiss.component';

describe('AddbissComponent', () => {
  let component: AddbissComponent;
  let fixture: ComponentFixture<AddbissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
