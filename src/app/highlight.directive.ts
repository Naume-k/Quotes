import { Directive, ElementRef } from '@angular/core';
import {quote} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="lightpink";
   }

}