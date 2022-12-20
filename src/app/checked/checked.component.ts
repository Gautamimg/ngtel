import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent implements OnInit {

  constructor() { }

  selectedItemsList:any = [];
  checkedIDs = [];

  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Knitting',
      isChecked: false
    }
  ]

  ngOnInit(): void {
  }

  changeSelection(event:any) {
    this.selectedItemsList = this.checkboxesDataList.filter((value) => {
      return value.isChecked
    });
    console.log(event.target.id);
  }
  check(){
    
  }

}

