import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {
  constructor(private elRef: ElementRef) {}
  target: string = 'india';
  ngOnInit() {}

  ngAfterViewInit() {
    this.changeColor1();
    // this.changeColor2();
  }

  changeColor1() {
    console.log('this.elRef.nativeElement', this.elRef.nativeElement);
    const text = this.elRef.nativeElement.innerHTML;
    console.log('text', text);
    const newText = text.replaceAll(
      'india',
      `<span style="color:blue;">india</span>`
    );
    console.log('newText', newText);
    this.elRef.nativeElement.innerHTML = newText;
  }

  changeColor2() {
    console.log('this.elRef.nativeElement', this.elRef.nativeElement);
    this.elRef.nativeElement.innerText
      .split(' ')
      .map((el: any) => {
        console.log('el', el);
        if (el === this.target) {
          console.log('target', this.target);
          return el.replace(
            this.target,
            `<span style="color:blue">${this.target}</span>`
          );
          // return el.match(this.target)
          //   ? `<span style="color:blue">${this.target}</span>`
          //   : el;
        }
      })
      .join(' ');
  }
}
