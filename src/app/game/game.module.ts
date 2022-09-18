import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';



@NgModule({
  declarations: [
    ScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScreenComponent
  ]
})
export class GameModule { }
