import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuzePocComponent } from './fuze-poc/fuze-poc.component';
import { HttpClientModule } from '@angular/common/http';
import {CandInfoDataService} from "./service/cand-info-data.service";

@NgModule({
  declarations: [
    AppComponent,
    FuzePocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CandInfoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
