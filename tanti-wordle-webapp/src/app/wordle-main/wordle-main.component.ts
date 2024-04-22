import { WordValidation } from '../shared/models/word-validation';
import { TantiWordleApiService } from './../shared/services/tanti-wordle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordle-main',
  templateUrl: './wordle-main.component.html',
  styleUrls: ['./wordle-main.component.css'],
})
export class WordleMainComponent implements OnInit {
  targetWord: string = '';
  wordValidation: WordValidation;
  randomWordLenght: number = 5;
  maxTryCount: number = 5;

  constructor(private tantiWordleApiService: TantiWordleApiService) {}

  ngOnInit() {
    // TODO: add loading spinning?
    this.tantiWordleApiService
      .getRandomWord(this.randomWordLenght)
      .subscribe((value) => {
        this.targetWord = value
      });
    this.wordValidation = new WordValidation(this.randomWordLenght);
  }

  validateWord(wordToValidate: string): void {
    this.tantiWordleApiService.getWordValidation(wordToValidate, this.targetWord)
      .subscribe((value) => {
        this.wordValidation = value;
      });
  }
}
