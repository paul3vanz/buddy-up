import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalisedDate'
})
export class NormalisedDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
