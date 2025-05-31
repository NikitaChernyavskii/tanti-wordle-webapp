import { Component, Input, OnInit } from '@angular/core';
import { CharacterValidaionStatus } from 'src/app/shared/models/character-validaion-status';
import { WordValidation } from 'src/app/shared/models/word-validation';

@Component({
  selector: 'app-wordle-word',
  templateUrl: './wordle-word.component.html',
  styleUrls: ['./wordle-word.component.css'],
})
export class WordleWordComponent implements OnInit {
  @Input() wordValidation: WordValidation;

  constructor() {
  }

  ngOnInit(): void {
  }

  addCharacter(characterToAdd: string): void {
    console.log('checkpoint addCharacter: ', characterToAdd)
    let lastCharacter = this.wordValidation.characterValidations.find(ch => ch.character === '');
    if (lastCharacter) {
      lastCharacter.character = characterToAdd;
    }
  }

  deleteCharacter(): void {
    let lastCharacter = this.wordValidation.characterValidations.reverse().find(ch => ch.character === '');
    if (lastCharacter) {
      lastCharacter.character = '';
    }
  }

  getGridTileBackgroundColor(status: CharacterValidaionStatus): string {
    switch (status) {
      case CharacterValidaionStatus.NotValidated:
      default:
        return '#f5f5dc';
    }
  }
}
