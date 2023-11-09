import { createReducer, on } from '@ngrx/store';

import { RecipeApiActions } from './recipe.actions';
import { Recipe } from '../recipe.model';

export const initialState: ReadonlyArray<Recipe> = [];

export const recipesReducer = createReducer(
  initialState,
  on(RecipeApiActions.retrievedRecipeList, (_state, { recipes }) => recipes),
);
