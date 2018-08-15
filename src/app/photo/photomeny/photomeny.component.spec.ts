import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotomenyComponent } from './photomeny.component';

describe('PhotomenyComponent', () => {
  let component: PhotomenyComponent;
  let fixture: ComponentFixture<PhotomenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotomenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotomenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
