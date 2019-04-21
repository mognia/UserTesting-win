import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqReviewComponent } from './req-review.component';

describe('ReqReviewComponent', () => {
  let component: ReqReviewComponent;
  let fixture: ComponentFixture<ReqReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
