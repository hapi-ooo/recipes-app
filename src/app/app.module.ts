import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import awsconfig from '../aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Recipes } from './recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    Recipes,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AmplifyAuthenticatorModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
