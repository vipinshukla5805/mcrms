/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TesterComponent } from './tester.component';

describe('Component: Tester', () => {
  it('should create an instance', () => {
    let component = new TesterComponent();
    expect(component).toBeTruthy();
  });
});
