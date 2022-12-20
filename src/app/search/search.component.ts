import { Component, OnInit } from '@angular/core';
import { RSA_NO_PADDING } from 'constants';
import {ChartapiService} from '.././chartapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  car_details:any=[];
  searchText:any;

  constructor(private serve:ChartapiService) { }

  ngOnInit(): void {
    this.get_api();
  }

  get_api(){
    this.serve.chart_api('/AresVehicle/Vehicles').subscribe((res:any)=>{
    console.log(res);
    this.car_details=res.vehicleViews;
    console.log(this.car_details);
   
    })
  }
}

