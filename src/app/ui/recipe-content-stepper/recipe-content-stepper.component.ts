import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'recipe-content-stepper',
  templateUrl: './recipe-content-stepper.component.html',
  styleUrls: ['./recipe-content-stepper.component.scss'],
  providers: [{
    provide: CdkStepper,
    useExisting: RecipeContentStepperComponent
  }]
})
export class RecipeContentStepperComponent extends CdkStepper {
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
