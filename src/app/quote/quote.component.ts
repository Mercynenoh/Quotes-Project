import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

 
  completeQuote(isComplete, index){

    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  quotes: Quote[] = [
    new Quote(1, 'Never let the fear of striking out keep you from playing the game.', 0, 0, 'Babe Ruth', 'Mercy', new Date(2022,4,13)),
    new Quote(2, 'Life is never fair, and perhaps it is a good thing for most of us that it is not', 0, 0, 'Oscar Wilde','Mercy',  new Date(2022,4,12)),
    new Quote(3, 'The only impossible journey is the one you never begin.', 5, 0, 'Tony Robbins','Mercy',  new Date(2022,4,11)),
    new Quote(4, 'In this life we cannot do great things. We can only do small things with great love."', 0, 0, 'Mother Teresa', 'Mercy', new Date(2022,4,10)),
    new Quote(5, 'You will face many defeats in life, but never let yourself be defeated.', 0, 0, 'Maya Angelou','Mercy', new Date(2022,4,9) ),
  ];

  arr: number[] = this.quotes.map(quote=>quote.upvote)
  highest=Math.max (...this.arr)
  constructor() { }

  ngOnInit(): void {
  }
 
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
   upVote(index){
     this.quotes[index].upvote= ++ index
     
    
  }
  downVote(index){ 
     this.quotes[index].downvote=   ++ index
  }
 
}
  

