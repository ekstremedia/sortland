import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomenyComponent } from './videomeny.component';

describe('VideomenyComponent', () => {
  let component: VideomenyComponent;
  let fixture: ComponentFixture<VideomenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideomenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideomenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
