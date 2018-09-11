import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoknadComponent } from './soknad.component';

describe('SoknadComponent', () => {
  let component: SoknadComponent;
  let fixture: ComponentFixture<SoknadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoknadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoknadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
