import { Component, OnInit } from '@angular/core';
import { quote } from '../quote';
// import {getFullYear, getMinutes, getSeconds} from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:quote[]=[];  

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
