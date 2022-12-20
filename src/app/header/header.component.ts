import { Component, OnInit } from '@angular/core';
import {ChartapiService} from '../../app/chartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serve:ChartapiService) { }
  login:any;
  email: any;
  auth_token_1:any;

  ngOnInit(): void { }

  
  getotp(){ 
   this.serve.post('/sendOtpByMobile', { type: "Web", mobile: this.email}).subscribe((res:any) => {
      console.log(res);
    })
 
    console.log(this.email);
    
  }
  getval(val:any){
    console.log(val);
  // console.log(this.login);
  this.serve.post('/login',{type:"Web",email_mobile:val.email_mobile, password:val.password,password_otp:val.password}).subscribe(res =>{
    console.log(res);
  })
}
forgot_password(){
  this.serve.post('/sendOtpByMobile', { type: "Web", mobile: this.email}).subscribe((res:any) => {
    console.log(res);
    this.auth_token_1 = res[0].auth_token;
    console.log(this.auth_token_1);
  })
}
submit_otp(ent:any){
console.log(ent.currentVal);
this.serve.post('/verifyOtp',{type:"Web",otp:ent.currentVal,auth_token:this.auth_token_1}).subscribe((res:any)=>{
  console.log(res);
})
}
submit_newpsw(val:any){
console.log(val);
this.serve.post('/updatePasswordByToken',{type:"Web",password:val.password,confirm_password:val.confirm_password,auth_token:this.auth_token_1}).subscribe((res:any)=>{
  console.log(res);
})
}
}
