import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxHeaderDirective } from './parallax-header.directive';

@NgModule({
  declarations: [
    ParallaxHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParallaxHeaderDirective
  ]
})
export class SharedDirectivesModule { }
