import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static validateIf = (
    conditionFunction: () => boolean,
    validators: ((control: AbstractControl) => ValidationErrors | null)[]
  ): ((control: AbstractControl) => ValidationErrors) => (
    control: AbstractControl
  ): ValidationErrors => {
    if (!conditionFunction()) {
      return null;
    }

    const validatorResults = validators
      .map((validator) => validator(control))
      .filter((result) => result);

    return validatorResults.length ? validatorResults[0] : null;
  };
}
