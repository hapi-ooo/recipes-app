import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { Recipes } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipes', component: Recipes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
