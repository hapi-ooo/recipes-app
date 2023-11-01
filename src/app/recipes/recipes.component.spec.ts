import { TestBed } from '@angular/core/testing';
import { Recipes } from './recipes.component';
import { RecipeService } from './recipe.service';
import { of } from 'rxjs';

describe('RecipesComponent', () => {
  // Instantiate dependency services
  let recipeServiceSpy: jasmine.SpyObj<RecipeService>;

  beforeEach(() => {
    // Initialize spies to inject
    const recipeSpy = jasmine.createSpyObj('RecipeService', {
      'getRecipes': of(
        ['testRecipe1', 'testRecipe2']
      )
    });
    // Configure testing module
    TestBed.configureTestingModule({
      declarations: [Recipes],
      providers: [
        { provide: RecipeService, useValue: recipeSpy }
      ],
    });
    // Inject dependency services
    recipeServiceSpy = TestBed.inject(RecipeService) as jasmine.SpyObj<RecipeService>;
  });

  it('should create recipes', () => {
    const fixture = TestBed.createComponent(Recipes);
    const recipes = fixture.componentInstance;
    expect(recipes).toBeTruthy();
  });
});
