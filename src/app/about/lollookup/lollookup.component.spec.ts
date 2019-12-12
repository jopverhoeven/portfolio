import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LollookupComponent } from './lollookup.component';

describe('LollookupComponent', () => {
  let component: LollookupComponent;
  let fixture: ComponentFixture<LollookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LollookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LollookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
