import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDataDrivenComponent } from './template-data-driven.component';

describe('TemplateDataDrivenComponent', () => {
  let component: TemplateDataDrivenComponent;
  let fixture: ComponentFixture<TemplateDataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
