import { CharacterValidation } from './character-validation';

export class WordValidation {
  characterValidations: Array<CharacterValidation>;

  constructor(lenght: number) {
    this.characterValidations = new Array<CharacterValidation>(lenght);
  }
}
