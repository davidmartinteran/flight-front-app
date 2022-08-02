import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightComponent } from './flight/flight.component';



@NgModule({
  declarations: [
    FlightsComponent,
    FlightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlightComponent
  ]
})
export class FlightsModule { }
