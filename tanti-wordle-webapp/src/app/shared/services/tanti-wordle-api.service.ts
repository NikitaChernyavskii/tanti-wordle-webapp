import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordValidation } from '../models/word-validation';

@Injectable()
export class TantiWordleApiService {
  // TODO: move to config file
  private apiUrl: string = 'https://localhost:7058/api/v1';

  constructor(private httpClient: HttpClient) {}

  getRandomWord(length: number): Observable<string> {
    return this.httpClient.get<string>(
      `${this.apiUrl}/words/random?wordLenght=${length}`
    );
  }

  getWordValidation(wordToValidate: string, targetWord: string): Observable<WordValidation> {
    return this.httpClient.get<WordValidation>(
      `${this.apiUrl}/words/validation?wordToValidate=${wordToValidate}&targetWord=${targetWord}`
    );
  }
}
