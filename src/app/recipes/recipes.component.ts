import { Component } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from "./recipe.model";
import { Store } from "@ngrx/store";
import { selectRecipes } from "./state/recipe.selectors";
import { RecipeActions } from "./state/recipe.actions";
import { Router } from "@angular/router";

@Component({
  selector: 'recipes',
  template: `
    <p>Hi!</p>
    <mat-card *ngFor="let recipe of (recipes$ | async)"
      (click)="goToRecipe(recipe)">
      <mat-card-header>
    <mat-card-title>{{recipe.name}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
    <span>{{recipe.ingredients}}</span>
    <span>{{recipe.instructions}}</span>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: [],
})
export class Recipes {
  headers: HttpHeaders = new HttpHeaders({
    'Accept': ['application/json', 'text/plain', '*/*'],
    'Authorization': '',
  });
  key = '';
  recipes$ = this.store.select(selectRecipes);

  constructor(
    private store: Store,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.recipes$.subscribe( recipes => {
      console.log(recipes);
    });
  }

  goToRecipe(recipe: Recipe) {
    const recipeId = recipe.id;
    this.store.dispatch(RecipeActions.selectRecipe({ recipeId }));
    this.router.navigate(['/recipe', { id: recipeId }]);
  }
}
