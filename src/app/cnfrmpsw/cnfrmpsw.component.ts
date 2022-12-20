import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cnfrmpsw',
  templateUrl: './cnfrmpsw.component.html',
  styleUrls: ['./cnfrmpsw.component.css'],
})
export class CnfrmpswComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  submit: boolean = false;
  psw_match: any;
  cfmpsw_match: any;

  ngOnInit(): void {}
  confirm_password = this.fb.group({
    psw: ['', Validators.required],
    cfpsw: ['', Validators.required],
  });
  onsubmmit() {
    if (
      this.confirm_password.valid &&
      this.confirm_password.value.psw === this.confirm_password.value.cfpsw
    ) {
      console.log(this.confirm_password.value);
    } else {
      this.submit = true;
    }
  }
}
