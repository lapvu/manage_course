import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckScoreComponent } from './check-score.component';

describe('CheckScoreComponent', () => {
  let component: CheckScoreComponent;
  let fixture: ComponentFixture<CheckScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
