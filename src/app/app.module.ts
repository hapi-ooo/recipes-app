import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import awsconfig from '../aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Recipes } from './recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { recipesReducer } from './recipes/state/recipe.reducer';
import { collectionReducer } from './recipes/state/collection.reducer';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeContentStepperComponent } from './ui/recipe-content-stepper/recipe-content-stepper.component';
import { NavListMenuComponent } from './ui/nav-list-menu/nav-list-menu.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    Recipes,
    AddRecipeComponent,
    RecipeComponent,
    RecipeContentStepperComponent,
    NavListMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ recipes: recipesReducer, collection: collectionReducer }),
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CdkStepperModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
