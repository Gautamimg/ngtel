import { Component, OnInit } from '@angular/core';
import { ChartapiService } from '../../app/chartapi.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-apexchart',
  templateUrl: './apexchart.component.html',
  styleUrls: ['./apexchart.component.css'],
})
export class ApexchartComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  dataLabels!: ApexDataLabels;
  grid!: ApexGrid;
  stroke!: ApexStroke;
  title!: ApexTitleSubtitle;

  cardetails: any;
  carbrand: any = [];
  caryear: any = [];
  mapyear: any = [];
  carbrand_filter: any;
  caryear_filter: any;
  select_data: any = [];
  select_filter: any;
  select_option_data: any;
  event_true: boolean = false;

  constructor(private serve: ChartapiService) {}

  ngOnInit(): void {
    this.serve.chart_api('/AresVehicle/Vehicles').subscribe((res: any) => {
      console.log(res);
      this.cardetails = res.vehicleViews;
      console.log(this.cardetails);

      for (let i = 0; i < this.cardetails.length; i++) {
        this.select_data.push(this.cardetails[i].brand_slug);
        this.carbrand.push(this.cardetails[i].brand_name);
        this.caryear.push(this.cardetails[i].year);
      }
      
      this.caryear_filter = [...new Set(this.caryear)];
      this.select_filter = [...new Set(this.select_data)];
      this.carbrand_filter = [...new Set(this.carbrand)];
        // console.log(this.carbrand_filter);
        // console.log(this.caryear_filter);
        this.carbrand =[];
        this.caryear=[];
        
        
      this.forlopp_map();
    });
  }

  getdata(event: any) {

    this.serve
      .chart_api('/AresVehicle/Vehicles?brand_slug='+event.target.value)
      .subscribe((res: any) => {
        this.cardetails = res.vehicleViews;
        for (let i = 0; i < this.cardetails.length; i++) {  
          this.select_data.push(this.cardetails[i].brand_slug);
          this.carbrand.push(this.cardetails[i].brand_name);
          this.caryear.push(this.cardetails[0].year);
        }
        
        this.caryear_filter = [...new Set(this.caryear)];
        this.carbrand_filter = [...new Set(this.carbrand)];
      
        console.log(this.carbrand_filter);
        console.log(this.caryear_filter);
        this.carbrand=[];
        this.caryear=[];
        
        this.forlopp_map();
      });
  }

  forlopp_map() {
    (this.series = [
      {
        name: 'Year',
        data: this.caryear_filter,
      },
    ]),
      (this.chart = {
        type: 'line',
        height: 380,
        width: '100%',
        toolbar: {
          show: false,
        },
      }),
      (this.dataLabels = {
        enabled: true,
      }),
      (this.stroke = {
        curve: 'straight',
      }),
      (this.grid = {
        row: {
          colors: [],
          opacity: 0.5,
        },
      }),
      (this.xaxis = {
        categories: this.carbrand_filter,
      });
  }
}
