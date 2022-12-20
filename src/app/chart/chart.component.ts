import { Component, OnInit } from '@angular/core';
import { ChartapiService } from '../chartapi.service';

declare var ApexCharts: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor(private serve: ChartapiService) {}
  cardetails: any;
  carbrand: any = [];
  caryear: any = [];
  mapyear: any = [];
  carbrand_filter: any;
  caryear_filter: any;

  ngOnInit(): void {
    this.serve.chart_api('/AresVehicle/Vehicles').subscribe((res: any) => {
      console.log(res);
      this.cardetails = res.vehicleViews;
      console.log(this.cardetails);

      for (let i = 0; i < this.cardetails.length; i++) {
        this.carbrand.push(this.cardetails[i].brand_name);
        // console.log(this.carbrand);
        this.carbrand_filter = [...new Set(this.carbrand)];

        console.log(this.carbrand_filter);
        this.caryear.push(this.cardetails[i].year);
        console.log(this.caryear);
        this.caryear_filter = [...new Set(this.caryear)];
        console.log(this.caryear_filter); 
      }
      var options = {
        chart: {
          type: 'area',
          height: 380,
          width: '100%',
          toolbar:{
           show:false
          },
          animations: {
            initialAnimation: {
              enabled: false,
            },
          },
        },
        series: [
          {
            name: 'car name',
            data:this.caryear_filter
          },
        ],
  
        toolbar: {
          show: false,
        },
        markers: {
          size: 1,
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
  
        xaxis: {
          categories:this.carbrand_filter,
        },
        
      }
      var chart = new ApexCharts(document.querySelector('#chart'), options);

      chart.render();
    }); 
  }
}
