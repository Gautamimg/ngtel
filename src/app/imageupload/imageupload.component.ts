import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css'],
})
export class ImageuploadComponent implements OnInit {
  constructor() {}
  imageArray: any = [];
  imageErrorMsg: any = [];
  fileSource: any = [];
  quickposting: any;
  selectedFiles: any;
  urls: any = [];

  data: any;
  ngOnInit(): void {}
  onSelectPropertyImage(event: any) {
    var totalPropertyImageLength = this.fileSource.length;
    this.imageErrorMsg = '';
    if (event.target.files.length + totalPropertyImageLength > 10) {
      this.imageErrorMsg = 'You can upload max 10 images only';
    } else {
      if (event.target.files && event.target.files[0]) {
        var files = event.target.files;
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
          if (
            files[i].size >
            524288000000000000000000000000000000000000000000000000000000000000000000000000000000000000
          ) {
            this.imageErrorMsg = 'Image size must be less than 5 MB';
          } else if (!files[i].name.match(/.(jpg|jpeg|png|gif)$/i)) {
            this.imageErrorMsg = 'Invalid image found in selected image';
          } else {
            var reader = new FileReader();
            this.imageArray.push(files[i]);
            reader.onload = (event: any) => {
              console.log(event.target.result);
              console.log(files[i]);
              this.fileSource.push(event.target.result);
              console.log(this.fileSource);
            };
            reader.readAsDataURL(files[i]);
          }
        }
        this.quickposting.patchValue({ images: this.imageArray });
        console.log(this.quickposting);
      }
    }
  }

  // detectFiles(event: any) {
  //   var files = event.target.files.Length;
  //   var data = this.urls.length;
  //   console.log("araay data",data);
  //   console.log("araay files",files);

  //   if(event.target.files.length + data > 5){
  //     alert('Only 5 image u can upload');
  //   } 
  //   else{
  //     if (event.target.files) {
  //       for (let i = 0; i < data; i++) {
  //         var reader = new FileReader();
  //         reader.readAsDataURL(event.target.files[i]);
  //           reader.onload = (event:any) => {
  //             console.log(event.target.result);
  //             this.urls.push(event.target.result); 
  //           }
  //           // this.franchiseForm.patchValue({"office_image": event.target.files[i]});
  //       }
  //     }
  //   }
  // }
  

  detectFiles(event:any) {
    var totalPropertyImageLength = this.urls.length;
    var filesAmount = event.target.files.length;
    console.log(totalPropertyImageLength);
    

    if(event.target.files.length + totalPropertyImageLength > 5){
      alert('You can upload max 5 images only');     
    }
    else{
      if (event.target.files) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]);
            reader.onload = (event:any) => {
              console.log(event.target.result);
              this.urls.push(event.target.result);
              console.log(this.urls); 
            }
           
        }
      }
    }
  }

 
  delete(i: any) {
    console.log(i);
       this.urls.splice(i, 1);
    
  }

}
