import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContentStepperComponent } from './recipe-content-stepper.component';

describe('RecipeContentStepperComponent', () => {
  let component: RecipeContentStepperComponent;
  let fixture: ComponentFixture<RecipeContentStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeContentStepperComponent]
    });
    fixture = TestBed.createComponent(RecipeContentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
