import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>()
  @Input() quot: quote;
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}




