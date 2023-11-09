import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { Recipes } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';

const routes: Routes = [
  { path: 'welcome', component: Recipes },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipes', component: Recipes },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipe/:recipeName', component: RecipeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
