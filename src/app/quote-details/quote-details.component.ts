import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();


downvote=0;
upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(x){
  this.upvote=this.upvote+1;
}


  constructor() { }

  ngOnInit() {
  }

}


