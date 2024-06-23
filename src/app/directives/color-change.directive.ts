import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {}
  @Input() appColorChange!: string;
  search: string = '';

  ngOnInit() {
    this.search = this.appColorChange;
  }

  ngAfterViewInit() {
    this.changeColor1();
    // this.changeColor2();
  }

  changeColor1() {
    const text = this.elRef.nativeElement.innerHTML;
    const newText = text.replaceAll(
      'india',
      `<span style="color:blue;">india</span>`
    );
    this.elRef.nativeElement.innerHTML = newText;
  }

  changeColor2() {
    console.log('this.elRef.nativeElement', this.elRef.nativeElement);
    this.elRef.nativeElement.innerText
      .split(' ')
      .map((el: any) => {
        if (el === this.search) {
          return el.replace(
            this.search,
            `<span style="color:blue">${this.search}</span>`
          );
          //   ? `<span style="color:blue">${this.search}</span>`
          //   : el;
        }
      })
      .join(' ');
  }

  @HostListener('mouseover')
  onHover() {
    // this.elRef.nativeElement.color = 'red';
    this.render.setStyle(this.elRef.nativeElement, 'color', 'red');
  }
  @HostListener('mouseout')
  onHoverLeave() {
    // this.elRef.nativeElement.color = '';
    this.render.setStyle(this.elRef.nativeElement, 'color', '');
  }
}
