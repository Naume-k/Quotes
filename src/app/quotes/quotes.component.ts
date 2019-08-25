import { Component, OnInit } from '@angular/core';
import { quote } from '../quote';

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

// toggleDetails(index){
//   this.quotes[index].showDescription=!this.quotes[index].showDescription;
// }

upvote=0;
downvote=0;
quoteupvote(){
  this.upvote++;
}
quotedownvote(){
  this.downvote++;
}

deleteQuote(isDelete, index){
  if (isDelete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
