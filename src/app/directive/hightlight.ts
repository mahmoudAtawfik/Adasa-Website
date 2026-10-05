import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class Hightlight {
  constructor( private el:ElementRef) {
    el.nativeElement.classList.add('gradient-text');
  }
}
