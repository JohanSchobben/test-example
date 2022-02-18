import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsComponent } from './exams/exams.component';
import {HttpClientModule} from "@angular/common/http";
import { AmountPipe } from './amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    AmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
