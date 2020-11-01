import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] =[
    new Quote(1,"Demarillac","When you reach the end of your rope, tie a knot in it and hang on","Franklin Roosevelt",new Date(2019,1,6),2,4),
    new Quote(2, "Louise Izere", "If you look at what you have in life, you will always have more. If you lokk at wjat you don't have in life, you will never have enough.", "Oprah Winfrey",new Date(2019,9,30),0,0),
    new Quote(3,"Moringa Student","Nobody really cares if you’re miserable, so you might as well be happy.","Anonymous",new Date(2020,1,1),3,0),
    new Quote(4,"Unknown","Nobody can make you feel inferior without your permission.","Eleanor Roosevelt",new Date(2020,9,30),5,0),
    new Quote(5,"I.L.D","Life is either a daring adventure or nothing","Demarillac Izere",new Date(),3,1),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateUploaded = new Date(quote.dateUploaded)
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDescription =!this.quotes[index].showDescription;
}
preNum:number;
  lastNum:number;
  counter:number;

HighestUpvote(){

  this.preNum = 0
  this.lastNum = 0
  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upvote;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  return  this.preNum
}
deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm('Are you sure you want to delete this quote?')
    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
