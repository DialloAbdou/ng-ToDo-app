import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[todoBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef){ 

    this.setColorPadingLeft("#EB5353")
    
  }
 
  private setColorPadingLeft(color : string)
  {
   this.el.nativeElement.style.border_left = `3px solid ${color}`
  }



}
