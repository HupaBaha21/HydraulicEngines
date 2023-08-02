import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ModelViewingComponent } from './model-viewing/model-viewing.component';
import { PresentationComponent } from './presentation/presentation.component';
import { IdfLoginComponent } from './idf-login/idf-login.component';

import { FormsModule } from '@angular/forms';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'c25247c6-3cd6-4a30-8af2-7262a89b31c4',
      redirectUri: 'http://localhost:4200',
    }
  })
}


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ModelViewingComponent,
    PresentationComponent,
    IdfLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
