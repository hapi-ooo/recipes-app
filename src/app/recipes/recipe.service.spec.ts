import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

describe('RecipeService', () => {
  let service: RecipeService;
  // Instantiate dependency services
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Initialize spies to inject
    const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // Configure testing module
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpSpy }
      ],
    });

    // Inject module configuration
    service = TestBed.inject(RecipeService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getRecipes should return stubbed value from spy', async () => {
    const stubValue = ['testRecipe1', 'testRecipe2'];
    httpClientSpy.get.and.returnValue(of(stubValue));
    service.getRecipes(new HttpHeaders()).subscribe(response => {
      expect(response)
      .withContext('service received stub value')
      .toBe(stubValue);
      expect(httpClientSpy.get.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    });
  });
});
