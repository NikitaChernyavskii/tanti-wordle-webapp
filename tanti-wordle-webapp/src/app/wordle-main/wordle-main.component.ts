import { WordValidation } from '../shared/models/word-validation';
import { TantiWordleApiService } from './../shared/services/tanti-wordle-api.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WordleWordComponent } from './wordle-word/wordle-word.component';
import { CharacterValidation } from '../shared/models/character-validation';
import { CharacterValidaionStatus } from '../shared/models/character-validaion-status';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wordle-main',
  templateUrl: './wordle-main.component.html',
  styleUrls: ['./wordle-main.component.css'],
})
export class WordleMainComponent implements OnInit {
  @ViewChildren(WordleWordComponent) wordleWordComponents: QueryList<WordleWordComponent>;

  targetWord: string = '';
  wordValidations: Array<WordValidation>;

  maxTryCount: number = 5;
  wordsTotal: number = 5;
  wordLenght: number = 5;

  currentWordIndex: number = 0;
  isGameOver: boolean = false;

  constructor(private tantiWordleApiService: TantiWordleApiService) { }

  ngOnInit() {
    // TODO: add loading spinning?
    this.tantiWordleApiService
      .getRandomWord(this.wordLenght)
      .subscribe((value) => {
        this.targetWord = value
      });

    this.initializeDefaultWordValidation();
  }

  onLetterKeyPressed(letter: string): void {
    this.wordleWordComponents.get(this.currentWordIndex)?.addCharacter(letter);
  }

  onEnterKeyPressed(): void {
    // if yes - call api to validate the word
    var wordValidation: WordValidation = this.wordleWordComponents.get(this.currentWordIndex)?.wordValidation!;
    console.log('checkpoint wordValidation', wordValidation)
    var currentWordToValidate = wordValidation.characterValidations.map((x) => x.character).join('');
    this.validateWord(currentWordToValidate);
    this.currentWordIndex += 1;
    if (this.currentWordIndex) {

    }
    // check if currentWordIndex != maxTryCount
    // update currentWordIndex += 1
    // check if currentWordIndex is last => game over
  }

  validateWord(wordToValidate: string): void {
    this.tantiWordleApiService.getWordValidation(wordToValidate, this.targetWord)
      .subscribe((value) => {
        this.wordValidations[this.currentWordIndex] = value;
        // TODO: add error response logic
      });
  }

  private initializeDefaultWordValidation(): void {
    this.wordValidations = new Array<WordValidation>();
    for(var i = 0; i < this.wordsTotal; ++i) {
      var emptyWordValidation = new WordValidation(this.wordLenght);
      emptyWordValidation.characterValidations = new Array<CharacterValidation>();
      for(var j = 0; j < this.wordLenght; ++j) {
        var emptyCharacter = new CharacterValidation();
        emptyCharacter.status = CharacterValidaionStatus.NotValidated;
        emptyWordValidation.characterValidations.push(emptyCharacter);
      }
      this.wordValidations.push(emptyWordValidation);
    }
  }
}
