import { Component, OnInit } from '@angular/core';
import { ChartapiService } from '../../app/chartapi.service';
declare var $: any;
@Component({
  selector: 'app-oldproject',
  templateUrl: './oldproject.component.html',
  styleUrls: ['./oldproject.component.css'],
})
export class OldprojectComponent implements OnInit {
  isPrinting: boolean | undefined;
  router: any;
  newWin: any;
  divToPrint: any;

  constructor(private serve: ChartapiService) {}
  name: any;
  countriesdata: any = [];
  ngOnInit(): void {}
  submit() {
    console.log(this.name);
    this.serve.get(this.name).subscribe((res: any) => {
      console.log(res);
      this.countriesdata = res;
    });

this.serve.get_api("forgotPassword/EcJtnspl1!/9838203070/d9016f97f4db149a9bdb6d62e76dbed3/"+'4561237890').subscribe((data:any)=>{
  console.log( data);
})

    // setTimeout(() => {
    //   this.divToPrint = document.getElementById('section');
    //   this.newWin = this.divToPrint?.innerHTML;
    //   document.body.innerHTML = this.newWin;
    //   window.print();
    // }, 2000);
  }
  remove() {
    this.countriesdata.splice(0, 1);
  }
}
