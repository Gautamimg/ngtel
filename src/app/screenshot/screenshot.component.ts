import { Component, OnInit,ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.css']
})
export class ScreenshotComponent implements OnInit {
  @ViewChild('screen', { static: true }) screen: any;

  constructor(private captureService:NgxCaptureService) { }
  imgBase64='';
  ngOnInit(): void {
  }
  take_screenshot(){
    this.captureService
    .getImage(this.screen.nativeElement, true)
    .then((img: string) => {
      this.imgBase64 = img;
      this.downloadJson();
    });
  

  }

  downloadJson() {
    var element = document.createElement('a');
    element.setAttribute('href', this.imgBase64);
    element.setAttribute('download', 'test.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }


}
