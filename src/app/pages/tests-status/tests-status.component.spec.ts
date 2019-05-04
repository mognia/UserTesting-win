import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsStatusComponent } from './tests-status.component';

describe('TestsStatusComponent', () => {
  let component: TestsStatusComponent;
  let fixture: ComponentFixture<TestsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
