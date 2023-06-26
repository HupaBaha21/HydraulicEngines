import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ModelViewingComponent } from './model-viewing/model-viewing.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ModelViewingComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
