import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import {getFullYear, getMinutes, getSeconds} from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  submitType: string = 'Save';

  constructor() { }

  ngOnInit() {
  }

}
