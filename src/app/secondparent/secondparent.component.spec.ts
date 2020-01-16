import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondparentComponent } from './secondparent.component';

describe('SecondparentComponent', () => {
  let component: SecondparentComponent;
  let fixture: ComponentFixture<SecondparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
