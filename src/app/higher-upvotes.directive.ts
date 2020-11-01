import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigherUpvotes]'
})
export class HigherUpvotesDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='yellow';

}
}