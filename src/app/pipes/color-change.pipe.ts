import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorChange',
})
export class ColorChangePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replaceAll('india', `<span style="color:blue;">india</span>`);
  }
}
