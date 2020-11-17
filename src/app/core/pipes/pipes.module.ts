import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalisedDatePipe } from './normalised-date.pipe';
import { DistanceAwayPipe } from './distance-away.pipe';



@NgModule({
  declarations: [NormalisedDatePipe, DistanceAwayPipe],
  imports: [
    CommonModule
  ],
  exports: [NormalisedDatePipe, DistanceAwayPipe]
})
export class PipesModule { }
