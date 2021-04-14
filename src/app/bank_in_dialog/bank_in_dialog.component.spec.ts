/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bank_in_dialogComponent } from './bank_in_dialog.component';

describe('Bank_in_dialogComponent', () => {
  let component: Bank_in_dialogComponent;
  let fixture: ComponentFixture<Bank_in_dialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bank_in_dialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bank_in_dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
