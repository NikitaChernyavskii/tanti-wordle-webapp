import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleMainComponent } from './wordle-main/wordle-main.component';
import { HttpClientModule } from '@angular/common/http';
import { TantiWordleApiService } from './shared/services/tanti-wordle-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordleKeyboardComponent } from './wordle-main/wordle-keyboard/wordle-keyboard.component';
import { MatIconModule } from '@angular/material/icon';
import { WordleWordComponent } from './wordle-main/wordle-word/wordle-word.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [AppComponent, WordleMainComponent, WordleKeyboardComponent, WordleWordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [TantiWordleApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
