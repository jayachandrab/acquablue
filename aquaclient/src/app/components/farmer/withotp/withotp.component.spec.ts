import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithotpComponent } from './withotp.component';

describe('WithotpComponent', () => {
  let component: WithotpComponent;
  let fixture: ComponentFixture<WithotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
