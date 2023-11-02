import { Component } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes',
  template: `
    <p>Hi!</p>
    <p *ngFor="let item of items">{{item}}</p>
  `,
  styleUrls: [],
})
export class Recipes {
  headers: HttpHeaders = new HttpHeaders({
    'Accept': ['application/json', 'text/plain', '*/*'],
    'Authorization': '',
  });
  key = '';
  items: string[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes()
      .subscribe( (data: any[]) => {
        data.forEach(item => {
            this.items.push(item.Name.S);
        });
        /*
          console.log(data);
        console.log(this.items);
          */
    });
  }
}
