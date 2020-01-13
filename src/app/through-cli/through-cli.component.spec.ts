import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughCliComponent } from './through-cli.component';

describe('ThroughCliComponent', () => {
  let component: ThroughCliComponent;
  let fixture: ComponentFixture<ThroughCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
