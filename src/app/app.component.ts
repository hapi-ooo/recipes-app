import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Recipe } from './recipes/recipe.model';
import { RecipeService } from './recipes/recipe.service';
import { Store } from '@ngrx/store';
import { RecipeApiActions } from './recipes/state/recipe.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  services = {
    async handleSignIn(formData: Record<string, any>) {
      let { username, password } = formData;
      return Promise.resolve( Auth.signIn({
        username,
        password,
      }).then( val => {
        let keyPrefix = val.keyPrefix;
        let username = val.username;
        let cognitoStoragePrefix = keyPrefix + '.' + username;
        localStorage.setItem('cognitoStoragePrefix', cognitoStoragePrefix);
        localStorage.setItem('cognitoUserSub', val.attributes.sub);
        return val;
      })
                            );
    },
  };

  constructor(
    private recipeService: RecipeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    let recipes: Recipe[] = [];
    this.recipeService.getRecipes()
      .subscribe( (data: any[]) => {
        data.forEach(item => {
          let nameArray = item.Name.S.split(' ');
          nameArray = nameArray.slice(0, nameArray.length - 1);
          let recipe: Recipe = {
              id: item.Name.S,
              name: nameArray.join(' '),
              ingredients: item.Ingredients.SS,
              instructions: item.Instructions.SS
          };
          recipes = [...recipes, recipe];
        });
        recipes.forEach( r => console.log(r) );
        this.store.dispatch(RecipeApiActions.retrievedRecipeList({ recipes }));
    });
  }

}
