import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    value.sort((a:any, b:any) => a.name.localCompare(b.name))
    return value;
  }

}
