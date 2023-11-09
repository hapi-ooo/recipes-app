import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  addRecipeForm = new FormGroup({
    name: new FormControl(''),
    ingredient: new FormControl(''),
    instruction: new FormControl(''),
    recipeImage: new FormControl(),
  });
  ingredients: string[] = [];
  instructions: string[] = [];

  constructor(private recipeService: RecipeService,
             private cref: ChangeDetectorRef) {
    let ingredientsString = localStorage.getItem('addIngredients');
    if (ingredientsString)
      this.ingredients = ingredientsString.split(',');
    let instructionsString = localStorage.getItem('addInstructions');
    if (instructionsString)
      this.instructions = instructionsString.split(',');
  }

  // form submit callback
  onSubmit() {

    // instantiate recipe object
    let recipe = {
      Name: this.addRecipeForm.get('name')!.value,
      Ingredients: this.ingredients,
      Instructions: this.instructions,
    };

    // create the recipe and update local values
    this.recipeService.createRecipe(recipe).subscribe( response => {
      console.log(response);
      if (response.$metadata.httpStatusCode != 201)
      this.ingredients = [];
      this.instructions = [];
      localStorage.setItem('addIngredients', '');
      localStorage.setItem('addInstructions', '');
    });
  }

  addIngredient() {
    this.ingredients.push(
      // Button is disabled unless 'ingredient' has a value
      this.addRecipeForm.get('ingredient')!.value!
    );
    this.addRecipeForm.get('ingredient')!.setValue('');
    console.log(this.ingredients.toString());
    localStorage.setItem('addIngredients', this.ingredients.toString());
  }

  isIngredientEmpty() {
    return this.addRecipeForm.get('ingredient')!.value! === '';
  }

  addInstruction() {
    this.instructions.push(
      // Button is disabled unless 'instruction' has a value
      this.addRecipeForm.get('instruction')!.value!
    );
    this.addRecipeForm.get('instruction')!.setValue('');
    localStorage.setItem('addInstructions', this.instructions.toString());
  }

  onRemoveInstruction(index: number) {
    this.instructions = this.instructions.filter((_, i) =>
      i != index
    );
    localStorage.setItem('addInstructions', this.instructions.toString());
    //this.cref.detectChanges();
  }

  isInstructionEmpty() {
    return this.addRecipeForm.get('instruction')!.value! === '';
  }

  KeydownEvent(event: any) {
    //keycode for Enter is 13
    if (event.keyCode === 13) {
      event.preventDefault();
      if (event.target.id == 'ingredient' && !this.isIngredientEmpty())
        this.addIngredient();
      if (event.target.id == 'instruction' && !this.isInstructionEmpty())
        this.addInstruction();
    }
  }
}
