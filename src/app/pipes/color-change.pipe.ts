import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'colorChange',
})
export class ColorChangePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, search: string): unknown {
    // ! Logic 01
    // const replacedValue = value.replaceAll(
    //   search,
    //   `<span style="color:blue;">${search}</span>`
    // );
    // return replacedValue;

    // ! Logic 02
    // // Regular expression to find all instances of the search term
    // const re = new RegExp(search, 'gi');
    // const replacedValue = value.replace(
    //   re,
    //   `<span style="color:blue;">${search}</span>`
    // );
    // // Sanitize the HTML before returning it
    // return this.sanitizer.bypassSecurityTrustHtml(replacedValue);

    // ! Logic 03
    const finalOutput = value
      .split(' ')
      .map((el) => {
        if (el === search) {
          return el.replace(el, `<span style='color:red'>${search}</span>`);
        } else {
          return el;
        }
      })
      .join(' ');
    // return finalString;
    return this.sanitizer.bypassSecurityTrustHtml(finalOutput);
  }
}
