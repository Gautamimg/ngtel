import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  date: any;
  startdate: any;
  enddate: any;
  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {}

  getval(val: any) {
    console.log(val);
    // this.date= new Date();
    // this.date.setDate(this.date.getDate() - 30);
    // console.log(this.date.toString());

    var enddatetemp = new Date(val);
    this.startdate = enddatetemp.setDate(enddatetemp.getDate() - 30);;
    this.startdate = this.datepipe.transform(this.startdate, 'dd/MM/yyyy');
    console.log(this.startdate);
  }
}
