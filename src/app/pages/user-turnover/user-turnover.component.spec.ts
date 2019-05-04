import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTurnoverComponent } from './user-turnover.component';

describe('UserTurnoverComponent', () => {
  let component: UserTurnoverComponent;
  let fixture: ComponentFixture<UserTurnoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTurnoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
