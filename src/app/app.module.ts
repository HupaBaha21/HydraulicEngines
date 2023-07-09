import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
