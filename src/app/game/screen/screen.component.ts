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
  winner: string = '';
  drawv: boolean = false;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  

  Start() {

    this.winner = '';

    for (let i=0; i<9; i++) {
      this.board.nativeElement.children[i].textContent = '';
    }
      
    this.state.forEach( (_,i) => {
      this.state[i] = true;
    });
    this.finished = false;

  }

  Set( square: number) {

    if( this.symbol === 0 ){
      this.board.nativeElement.children[square].textContent = 'X';
      this.state[square] = false;
      this.symbol = 1; 
    }

    else {
      this.board.nativeElement.children[square].textContent = 'O';
      this.state[square] = false;
      this.symbol = 0;
    }
  }

  
  Check() {
    const first = this.board.nativeElement.firstChild!.textContent;
    const last = this.board.nativeElement.lastChild!.textContent;
    
    //  Horizontal
    if(first != '' && first === this.board.nativeElement.children[1].textContent
      && first === this.board.nativeElement.children[2].textContent) {
        
        this.GameFinished(first!);
    }

    if(this.board.nativeElement.children[3].textContent !== ''
      && this.board.nativeElement.children[3].textContent === this.board.nativeElement.children[4].textContent
      && this.board.nativeElement.children[3].textContent === this.board.nativeElement.children[5].textContent) {
        
        this.GameFinished(this.board.nativeElement.children[3].textContent!);
    }

    if(this.board.nativeElement.children[6].textContent !== ''
      && this.board.nativeElement.children[6].textContent === this.board.nativeElement.children[7].textContent
      && this.board.nativeElement.children[6].textContent === last) {
        
        this.GameFinished(this.board.nativeElement.children[6].textContent!);
    }
    
    //  Vertical
    if(first !== ''
      && first === this.board.nativeElement.children[3].textContent
      && first === this.board.nativeElement.children[6].textContent) {
        
        this.GameFinished(first!);
    }
    
    if(this.board.nativeElement.children[1].textContent !== ''
      && this.board.nativeElement.children[1].textContent === this.board.nativeElement.children[4].textContent
      && this.board.nativeElement.children[1].textContent === this.board.nativeElement.children[7].textContent) {
        
        this.GameFinished(this.board.nativeElement.children[1].textContent!);
    }
    
    if(this.board.nativeElement.children[2].textContent !== ''
      && this.board.nativeElement.children[2].textContent === this.board.nativeElement.children[5].textContent
      && this.board.nativeElement.children[2].textContent === last) {
        
        this.GameFinished(this.board.nativeElement.children[2].textContent!);
    }

    //  Diagonal
    if(first !== ''
      && first === this.board.nativeElement.children[4].textContent
      && first === last) {
        
        this.GameFinished(first!);
    }
    
    if(this.board.nativeElement.children[2].textContent !== ''
      && this.board.nativeElement.children[2].textContent === this.board.nativeElement.children[4].textContent
      && this.board.nativeElement.children[2].textContent === this.board.nativeElement.children[6].textContent) {
        this.GameFinished(this.board.nativeElement.children[2].textContent!);
    }
    

    //  Draw
    if(this.winner === '')
      for (let i=0; i<9; i++) {
        if(this.board.nativeElement.children[i].textContent === ''){
          this.drawv = false;
          break
        }

        this.drawv = true;
      }

    if(this.drawv)
      this.GameFinished('');

  }

  GameFinished(w: string) {

    this.state.forEach( (_,i) => {
      this.state[i] = false;
    });
    this.winner = w;
    this.finished = true;
    
  }

}
