import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleWordComponent } from './wordle-word.component';

describe('WordleWordComponent', () => {
  let component: WordleWordComponent;
  let fixture: ComponentFixture<WordleWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
