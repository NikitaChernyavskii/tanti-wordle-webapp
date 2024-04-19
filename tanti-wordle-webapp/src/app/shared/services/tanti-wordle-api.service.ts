import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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
}
