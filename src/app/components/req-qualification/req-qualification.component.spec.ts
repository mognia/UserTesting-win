import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqQualificationComponent } from './req-qualification.component';

describe('ReqQualificationComponent', () => {
  let component: ReqQualificationComponent;
  let fixture: ComponentFixture<ReqQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
