/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContasAPagarComponent } from './contasAPagar.component';

describe('ContasAPagarComponent', () => {
  let component: ContasAPagarComponent;
  let fixture: ComponentFixture<ContasAPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasAPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasAPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
