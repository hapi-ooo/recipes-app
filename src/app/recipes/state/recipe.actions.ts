import { createActionGroup, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const RecipeActions = createActionGroup({
  source: 'Recipes',
  events: {
    'Add Recipe': props<{ recipeName: string }>(),
    'Remove Recipe': props<{ recipeName: string }>(),
    'Select Recipe': props<{ recipeId: string }>(),
  },
});

export const RecipeApiActions = createActionGroup({
  source: 'Recipes API',
  events: {
    'Retrieved Recipe List': props<{ recipes: ReadonlyArray<Recipe> }>(),
  },
});
