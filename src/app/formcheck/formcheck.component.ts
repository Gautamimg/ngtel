import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formcheck',
  templateUrl: './formcheck.component.html',
  styleUrls: ['./formcheck.component.css']
})
export class FormcheckComponent  {
  form: FormGroup;
  checkArray:any=[];
  name:any;
  Data:any = [
    { name: 'Pear', value: 'pear',id: 1 },
    { name: 'Plum', value: 'plum',id: 2 },
    { name: 'Kiwi', value: 'kiwi',id: 3 },
    { name: 'Apple', value: 'apple',id: 4 },
    { name: 'Lime', value: 'lime',id: 5 },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  onCheckboxChange(e: any) {
    this.checkArray = this.form.get('checkArray') ;
    if (e.target.checked) {
      this.checkArray.push(new FormControl(e.target.value));
    } else {
      
      this.checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          this.checkArray.removeAt();
          return;
        }
        
      });
    }
  }
  submitForm() {
  
    console.log(this.checkArray.value);
  }
}


