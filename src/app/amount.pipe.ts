import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: any[] | undefined): string {
    if (value === undefined || value.length === 0) {
      return "none";
    }
    return value.length.toString();
  }

}
