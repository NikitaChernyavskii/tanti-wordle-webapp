import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wordle-keyboard',
  templateUrl: './wordle-keyboard.component.html',
  styleUrls: ['./wordle-keyboard.component.css'],
})
export class WordleKeyboardComponent implements OnInit {
  @Output() letterKeyPressed = new EventEmitter<string>();
  @Output() deleteKeyPressed = new EventEmitter();
  @Output() enterKeyPressed = new EventEmitter();

  keyboard: string[][] = [
    'ЙЦУКЕНГШЩЗХЪ'.split(''),
    'ФЫВАПРОЛДЖЭ'.split(''),
    'ЯЧСМИТЬБЮ'.split(''),
  ];

  constructor() {}

  ngOnInit() {}

  onLetterKeyPressed(letter: string): void {
    console.log(letter);
  }

  onDeleteKeyPressed(): void {}

  onEnterKeyPressed(): void {}
}
