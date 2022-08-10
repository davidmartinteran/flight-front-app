import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/shared/models/flight.model';



const ELEMENT_DATA: Flight[] = [
  {
    idFlight: 1, companyName: 'Air France', flightType: 'Direct flight', 
    travelType: 'Round trip', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Paris', arrivalLocation: 'London',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  },
  {
    idFlight: 2, companyName: 'Air France', flightType: 'Connecting', 
    travelType: 'One way', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Bruselas', arrivalLocation: 'Madrid',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  },
  {
    idFlight: 3, companyName: 'Qatar Airways', flightType: 'Connecting', 
    travelType: 'Round trip', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Milano', arrivalLocation: 'Palermo',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  },
  {
    idFlight: 4, companyName: 'Air Arabia', flightType: 'Direct flight', 
    travelType: 'Round trip', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Budapest', arrivalLocation: 'Tanger',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  },
  {
    idFlight: 5, companyName: 'Air France', flightType: 'Connecting', 
    travelType: 'One Way', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Niza', arrivalLocation: 'Dublin',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  },
  {
    idFlight: 6, companyName: 'Air France', flightType: 'Connecting', 
    travelType: 'One Way', departureDate: new Date(), departureTime: new Date(),
    arrivalDate: new Date(), arrivalTime: new Date(), backDate: new Date(),
    backTime: new Date(), departureLocation: 'Niza', arrivalLocation: 'Dublin',
    flightDuration: new Date(), connectionDuration: new Date(), aircraftType: 'Airbas'
  }
]

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  displayedColumns: string[] = ['idFlight', 'companyName', 'flightType', 'travelType',
  'departureDate',  'arrivalDate',  'backDate','departureLocation', 'arrivalLocation', 'flightDuration',
  'connectionDuration', 'aircraftType', 'select'];
  flights = new MatTableDataSource<Flight>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.matSort;
  }

}
