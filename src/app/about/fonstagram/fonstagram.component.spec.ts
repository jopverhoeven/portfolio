import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonstagramComponent } from './fonstagram.component';

describe('FonstagramComponent', () => {
  let component: FonstagramComponent;
  let fixture: ComponentFixture<FonstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
