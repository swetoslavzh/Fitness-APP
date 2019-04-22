import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createArray',
  pure: true
})
export class CreateArrayPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return Array(value).fill(value).map((x,i) => i + 1);
  }
}
