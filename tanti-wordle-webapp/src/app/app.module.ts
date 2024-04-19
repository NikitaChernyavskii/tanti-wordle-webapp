import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleMainComponent } from './wordle-main/wordle-main.component';
import { HttpClientModule } from '@angular/common/http';
import { TantiWordleApiService } from './shared/services/tanti-wordle-api.service';

@NgModule({
  declarations: [AppComponent, WordleMainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TantiWordleApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
