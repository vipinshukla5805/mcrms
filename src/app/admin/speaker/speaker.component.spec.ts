/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SpeakerComponent } from './speaker.component';

describe('Component: Speaker', () => {
  it('should create an instance', () => {
    let component = new SpeakerComponent();
    expect(component).toBeTruthy();
  });
});
