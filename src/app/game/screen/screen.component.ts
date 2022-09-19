import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styles: [
  ]
})
export class ScreenComponent implements OnInit {

  @ViewChild('board') myboard!: ElementRef<HTMLDivElement>;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  Start() {
    console.log(this.myboard.nativeElement);
  }

}
