import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styles: [
  ]
})
export class ScreenComponent implements OnInit { 
  
  @ViewChild('board') board!: ElementRef<HTMLDivElement>;


  state: boolean = false;
  finished: boolean = true;
  symbol: number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  Start() {
    this.state = true;
    this.finished = false;

  }

  Set( square: string) {

    if( this.symbol === 0 ){

      switch(square){
        case('s1'):
          this.board.nativeElement.children[0].textContent = 'X';
          break

          
          
      }
      this.symbol = 1; 
    }
    else {
      
      switch(square){
        case('s1'):
        this.board.nativeElement.children[0].textContent = 'O';
          break
       
      }

      this.symbol = 0;
    }
  }

}
