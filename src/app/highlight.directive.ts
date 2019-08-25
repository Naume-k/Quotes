import { Directive, ElementRef, Input , HostListener } from '@angular/core';
import {quote} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quot:quote;

}