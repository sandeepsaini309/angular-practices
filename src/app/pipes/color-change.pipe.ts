import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'colorChange',
})
export class ColorChangePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, search: string): unknown {
    // const replacedValue = value.replaceAll(
    //   search,
    //   `<span style="color:blue;">${search}</span>`
    // );
    // return replacedValue;

    // Regular expression to find all instances of the search term
    const re = new RegExp(search, 'gi');
    const replacedValue = value.replace(
      re,
      `<span style="color:blue;">${search}</span>`
    );
    // Sanitize the HTML before returning it
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }
}
