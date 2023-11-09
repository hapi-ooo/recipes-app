import { createReducer, on } from '@ngrx/store';
import { RecipeActions } from './recipe.actions';

export const initialState: string = '';

export const collectionReducer = createReducer(
  initialState,
  on(RecipeActions.selectRecipe, ( _state, { recipeId }) => recipeId
  )
);
