/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LessonListComponent } from './lesson-list.component';

describe('Component: LessonList', () => {
  it('should create an instance', () => {
    let component = new LessonListComponent();
    expect(component).toBeTruthy();
  });
});
