import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const selectRecipes = createFeatureSelector<
  ReadonlyArray<Recipe>>('recipes');

export const selectCollectionState = createFeatureSelector<
  string>('collection');

export const selectRecipeSelection = createSelector(
  selectRecipes,
  selectCollectionState,
  (recipes, selectedId) => recipes.find( r => r.id === selectedId )
);
