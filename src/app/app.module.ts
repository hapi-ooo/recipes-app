import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import awsconfig from '../aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Recipes } from './recipes/recipes.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    Recipes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
