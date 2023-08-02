import { environment } from 'src/environments/environment';
import { isDevMode } from '@angular/core';

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
  console.log(isDevMode());
  const redirectUri = isDevMode() ? 'http://localhost:4200' : 'https://hupa21-ttu-hpu.azurewebsites.net/';
  console.log("redirectUri: " + redirectUri);
  return new PublicClientApplication({
    auth: {
      clientId: '8634eb2c-22c3-4c14-8fd6-60ace26c1910',
      redirectUri: redirectUri,
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
