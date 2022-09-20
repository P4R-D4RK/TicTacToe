import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styles: [
  ]
})
export class ScreenComponent implements OnInit { 
  
  @ViewChild('board') board!: ElementRef<HTMLDivElement>;


  state = new Array(9).fill(false);
  finished: boolean = true;
  symbol: number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  Start() {

    for (let i=0; i<9; i++) {
      this.board.nativeElement.children[i].textContent = '';
    }
      

    this.state.forEach( (_,i) => {
      this.state[i] = true;
    })
    this.finished = false;

  }

  Set( square: number) {

    if( this.symbol === 0 ){
      this.board.nativeElement.children[square].textContent = 'X';
      this.board.nativeElement.children[square].classList.add('ejemplo');
      this.state[square] = false;
      this.symbol = 1; 
    }

    else {
      this.board.nativeElement.children[square].textContent = 'O';
      this.state[square] = false;
      this.symbol = 0;
    }
  }


}
