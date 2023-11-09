import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { Observable, switchMap } from 'rxjs';
import { selectRecipeSelection, selectRecipes } from '../state/recipe.selectors';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe$!: Observable<Recipe>;
  recipe!: Recipe;
  selectedId: string = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipe$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = String(params.get('id'));
        try {
        let selectedRecipe = this.store.select(selectRecipeSelection)
        if (selectedRecipe === undefined)
          throw new Error('selected recipe undefined');
        return selectedRecipe as Observable<Recipe>;
        } catch(err) {
          console.log(err);
          return new Observable<Recipe>();
        }
      })
    );
    this.recipe$.subscribe(r => {
      if (!r) {
        this.router.navigate(['/recipes']);
        console.log('oh');
      }
      console.log('hi');
      this.recipe = r;
    });
  }
}
