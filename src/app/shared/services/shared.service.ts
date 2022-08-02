import { Injectable } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class SharedService { 
  private _searchCriteresForm: FormGroup; 
  public get searchCriteresForm(): FormGroup { 
    return this._searchCriteresForm; 
  } 
  public set searchCriteresForm(value: FormGroup) { 
    this._searchCriteresForm = value; 
  } 
 
  createSearchCriteresForm(){ 
    this._searchCriteresForm = new FormGroup({ 
      company: new FormControl(''), 
      flightType: new FormControl(''), 
      travelType: new FormControl(''), 
      departureLocation: new FormControl(''), 
      arrivalLocation: new FormControl(''), 
      departureDateMin: new FormControl(''), 
      arrivalDateMin: new FormControl(''), 
      backDateMin: new FormControl(''), 
      departureTimeMin: new FormControl(''), 
      arrivalTimeMin: new FormControl(''), 
      backTimeMin: new FormControl(''), 
      flightDurationMin: new FormControl(''), 
      connectionDurationMin: new FormControl(''), 
      departureDateMax: new FormControl(''), 
      arrivalDateMax: new FormControl(''), 
      backDateMax: new FormControl(''), 
      departureTimeMax: new FormControl(''), 
      arrivalTimeMax: new FormControl(''), 
      backTimeMax: new FormControl(''), 
      flightDurationMax: new FormControl(''), 
      connectionDurationMax: new FormControl(''), 
      aircraftType: new FormControl(''), 
      fareMin: new FormControl(''), 
      fareMax: new FormControl(''), 
    }) 
  } 
  constructor() { } 
}