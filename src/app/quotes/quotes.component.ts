import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] =[
    new Quote(1,"Demarillac","Some people feel the rain. Others just get wet.","Bob Dylan",new Date(2019,1,6),2,4),
    new Quote(2, "Louise Izere", "You can do anything but not everything", "Anonymous",new Date(2019,9,30),0,0),
    new Quote(3,"Moringa Student","Nobody really cares if you’re miserable, so you might as well be happy.","Chuck Palahniuk",new Date(2020,1,1),3,0),
    new Quote(4,"Unknown","Nobody can make you feel inferior without your permission.","Eleanor Roosevelt",new Date(2020,9,30),5,0),
    new Quote(5,"I.L.D","To live a creative life, we must lose our fear of being wrong","Demarillac Izere",new Date(),3,1),
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
preNum:number
  lastNum:number
  counter:number
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
