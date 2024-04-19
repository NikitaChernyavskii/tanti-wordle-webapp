/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordleMainComponent } from './wordle-main.component';

describe('WordleMainComponent', () => {
  let component: WordleMainComponent;
  let fixture: ComponentFixture<WordleMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordleMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
