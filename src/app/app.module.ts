import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { MoreDetailsComponent } from './htmltopdf/more-details/more-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent,
    MoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
