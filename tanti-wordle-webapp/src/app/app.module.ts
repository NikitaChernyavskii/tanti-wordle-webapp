import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleMainComponent } from './wordle-main/wordle-main.component';
import { HttpClientModule } from '@angular/common/http';
import { TantiWordleApiService } from './shared/services/tanti-wordle-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, WordleMainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [TantiWordleApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
