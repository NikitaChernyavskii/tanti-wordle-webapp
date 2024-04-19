import { getTestBed } from '@angular/core/testing';
import { TantiWordleApiService } from './../shared/services/tanti-wordle-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordle-main',
  templateUrl: './wordle-main.component.html',
  styleUrls: ['./wordle-main.component.css'],
})
export class WordleMainComponent implements OnInit {
  word: string = '';
  randomWordLenght: number = 5;

  constructor(private tantiWordleApiService: TantiWordleApiService) {}

  ngOnInit() {
    this.tantiWordleApiService
      .getRandomWord(this.randomWordLenght)
      .subscribe((value) => (this.word = value));
  }
}
